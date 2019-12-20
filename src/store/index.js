import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { remote } from 'electron'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    version: remote.app.getVersion(),
    footerIsHidden: false,
    logoIsHidden: false,
    themeDark: false
  },
  mutations: {
    hideFooter (state) {
      state.footerIsHidden = !state.footerIsHidden
    },
    hideLogo (state) {
      state.logoIsHidden = !state.logoIsHidden
    },
    toggleDarkTheme (state) {
      state.themeDark = !state.themeDark
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
