module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'eu.houby-studio.ogl',
        productName: 'OGL',
        copyright: 'Copyright © 2020 Houby Studio',
        publish: ['github'],
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
        },
        snap: {
          publish: 'github'
        }
      },
      chainWebpackRendererProcess: config => {
        if (process.env.NODE_ENV === 'development') {
          config.plugins.delete('prefetch')
        }
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  transpileDependencies: [
    'vuetify'
  ]
}
