<template>
  <v-app-bar color="primary" app>
    <div v-if="!logoHidden" class="d-flex align-center">
      <v-img
        alt="OGL Logo"
        class="shrink mr-2 hidden-xs-only"
        contain
        :src="require('../assets/logo.png')"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title class="hidden-xs-only">OGL</v-toolbar-title>
    </div>
    <v-tabs v-bind:background-color="$vuetify.theme.dark ? $vuetify.theme.themes.dark.primary : $vuetify.theme.themes.light.primary" color="accent" show-arrows align-with-title centered grow optional>
      <v-tab to="/library">
        <v-icon>mdi-bookshelf</v-icon>
        <span class="hidden-xs-only">Library</span>
      </v-tab>
      <v-tab to="/explore">
        <v-icon>mdi-magnify</v-icon>
        <span class="hidden-xs-only">Explore</span>
      </v-tab>
      <v-tab to="/profile">
        <v-icon>mdi-account</v-icon>
        <span class="hidden-xs-only">Profile</span>
      </v-tab>
      <v-menu offset-y bottom transition="scroll-y-transition">
        <template v-slot:activator="{ on }">
          <v-btn class="mt-1 mt-md-2" icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item-group color="accent">
            <v-list-item v-for="item in navigation" :key="item.name" :to="item.link">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  name: 'navigation-bar',
  data: function () {
    return {
      navigation: [
        { name: 'Settings', icon: 'mdi-settings', link: '/settings' },
        { name: 'About', icon: 'mdi-information', link: '/about' },
        { name: 'Quit', icon: 'mdi-bolnisi-cross', link: '/quit' }
      ]
    }
  },
  computed: {
    logoHidden () {
      return this.$store.state.settingsLogoHidden
    }
  }
}
</script>

<style>
  .bg-blak {
    background-color: "accent" !important;
  }
</style>
