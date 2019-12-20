import Vue from 'vue'
import Vuex from 'vuex'
import { remote } from 'electron'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    version: remote.app.getVersion(),
    footerIsHidden: false,
    logoIsHidden: false
  },
  mutations: {
    hideFooter (state) {
      state.footerIsHidden = !state.footerIsHidden
    },
    hideLogo (state) {
      state.logoIsHidden = !state.logoIsHidden
    }
  },
  actions: {
  },
  modules: {
  }
})
