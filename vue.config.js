module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'eu.houby-studio.ogl',
        publish: 'github',
        mac: {
          category: 'public.app-category.games'
        },
        win: {
          target: [
            'nsis',
            'portable',
            'zip'
          ]
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        linux: {
          synopsis: "Open Gamers' Library",
          category: 'Game',
          icon: 'icons',
          desktop: {
            Type: 'Application',
            Encoding: 'UTF-8',
            Name: 'OGL',
            Comment: "Open Gamers' Library",
            Terminal: 'false'
          },
          target: [
            'AppImage',
            'snap',
            'deb',
            'rpm',
            'pacman',
            'zip'
          ]
        }
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
