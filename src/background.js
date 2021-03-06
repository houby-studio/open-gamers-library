'use strict'

import { app, protocol, BrowserWindow, dialog, shell } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import { autoUpdater } from 'electron-updater'
// Import ipc event listeners
import regIpcCheckForUpdate from './ipc/check-for-updates'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Register ipc event listeners
regIpcCheckForUpdate()

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Update available notifier - temporary as auto updates are broken on electron 7
autoUpdater.on('update-available', () => {
  dialog.showMessageBox({
    type: 'info',
    title: 'New Update Available',
    message: 'New Update Available, do you want update now?\nYou can configure automatic updates in Settings',
    buttons: ['Yes', 'No']
  }).then(buttonIndex => {
    if (buttonIndex.response === 0) {
      shell.openExternal('https://github.com/houby-studio/open-gamers-library/releases/latest')
    }
  })
})

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    show: isDevelopment,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
    if (process.env.IS_TEST) win.show()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')

    win.once('ready-to-show', () => {
      win.show()
    })

    // autoUpdater.checkForUpdatesAndNotify() // Currently this is broken on electron 7
    autoUpdater.checkForUpdates()
  }

  // When using a href with _blank target in renderer, this makes it open in default browser
  // win.webContents.on('new-window', function (event, url) {
  //   event.preventDefault()
  //   shell.openExternal(url)
  // })

  win.on('closed', () => {
    win = null
  })
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
