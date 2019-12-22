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
    settingsThemeDark: false
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
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
