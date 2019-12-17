<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="OGL Logo"
        class="shrink mr-2"
        contain
        :src="require('../assets/logo.png')"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title d-xs-none>OGL</v-toolbar-title>
    </div>
    <v-tabs show-arrows align-with-title centered grow background-color="primary">
      <v-tab to="/library">
        <v-icon>mdi-bookshelf</v-icon>Library
      </v-tab>
      <v-tab to="/explore">
        <v-icon>mdi-magnify</v-icon>Explore
      </v-tab>
      <v-tab to="/profile">
        <v-icon>mdi-account</v-icon>Profile
      </v-tab>
    </v-tabs>
    <!-- <v-spacer></v-spacer> -->

    <v-menu offset-y bottom transition="scroll-y-transition">
      <template v-slot:activator="{ on }">
        <v-btn dark icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item-group color="primary">
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
  </v-app-bar>
</template>

<script>

export default {
  name: 'Navigation',
  data: function () {
    return {
      navigation: [
        { name: 'Settings', icon: 'mdi-settings', link: '/settings' },
        { name: 'About', icon: 'mdi-information', link: '/about' },
        { name: 'Quit', icon: 'mdi-bolnisi-cross', link: '/quit' }
      ]
    }
  }
}
</script>
