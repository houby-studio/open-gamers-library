import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

var vueApp = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
})

vueApp.$vuetify.theme.dark = store.state.settingsThemeDark
vueApp.$vuetify.theme.themes.dark.accent = store.state.settingsThemeAccentColorDark
vueApp.$vuetify.theme.themes.light.accent = store.state.settingsThemeAccentColorLight
vueApp.$vuetify.theme.themes.dark.primary = store.state.settingsThemePrimaryColorDark
vueApp.$vuetify.theme.themes.light.primary = store.state.settingsThemePrimaryColorLight

vueApp.$mount('#app')
