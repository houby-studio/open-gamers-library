import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
// import { remote } from 'electron'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    settingsFooterHidden: false,
    settingsLogoHidden: false,
    settingsThemeDark: false,
    settingsThemeAccentColorDark: '#e0e0e0',
    settingsThemeAccentColorLight: '#424242',
    settingsThemePrimaryColorDark: '#424242',
    settingsThemePrimaryColorLight: '#ffffff'
  },
  mutations: {
    hideFooter (state) {
      state.settingsFooterHidden = !state.settingsFooterHidden
    },
    hideLogo (state) {
      state.settingsLogoHidden = !state.settingsLogoHidden
    },
    toggleDarkTheme (state) {
      state.settingsThemeDark = !state.settingsThemeDark
    },
    setThemeAccent (state, { dark, light }) {
      console.log(`Set accent. This is ${dark} and this is ${light}.`)
      state.settingsThemeAccentColorDark = dark
      state.settingsThemeAccentColorLight = light
    },
    setThemePrimary (state, { dark, light }) {
      console.log(`Set primary. This is ${dark} and this is ${light}.`)
      state.settingsThemePrimaryColorDark = dark
      state.settingsThemePrimaryColorLight = light
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
