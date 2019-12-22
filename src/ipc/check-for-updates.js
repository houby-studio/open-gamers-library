'use strict'
import { ipcMain } from 'electron'
import { autoUpdater } from 'electron-updater'

// What it does: Checks for update on Github
// Where it is: 'About' page > 'Check For Updates' button
function regIpcCheckForUpdate () {
  ipcMain.on('check-for-updates', () => {
    autoUpdater.checkForUpdates()
  })
}

export default regIpcCheckForUpdate
