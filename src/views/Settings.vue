<template>
  <div class="settings">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col>
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card-title class="remove-padding"><v-icon>mdi-palette-advanced</v-icon> Theme</v-card-title>
                    <v-subheader class="remove-padding"><v-icon>mdi-theme-light-dark</v-icon> Dark / Light</v-subheader>
                    <v-switch color="accent" v-model="toggleDarkTheme" v-on:change="$vuetify.theme.dark = toggleDarkTheme" label="Dark" class="padding-left" />
                    <v-subheader class="remove-padding"><v-icon>mdi-format-color-fill</v-icon> Primary color</v-subheader>
                    <v-btn x-large class="blackwhite" v-on:click="setThemePrimary({ dark: '#424242', light: '#ffffff' })"></v-btn>
                    <v-btn x-large class="red" v-on:click="setThemePrimary({ dark: '#B71C1C', light: '#EF9A9A' })"></v-btn>
                    <v-btn x-large class="blue" v-on:click="setThemePrimary({ dark: '#1A237E', light: '#9FA8DA' })"></v-btn>
                    <v-btn x-large class="purple" v-on:click="setThemePrimary({ dark: '#4527A0', light: '#B39DDB' })"></v-btn>
                    <v-dialog v-model="dialogPrimary" max-width="400px">
                      <template v-slot:activator="{ on }">
                        <v-btn x-large v-bind:color="customColorPrimary" class="custom" v-on="on">Custom</v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <v-tabs v-bind:color="customColorPrimary" centered grow>
                            <v-tab>Pick custom color</v-tab>
                          </v-tabs>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col align="center">
                                <v-color-picker v-model="customColorPrimary" hide-mode-switch flat mode="hexa"></v-color-picker>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn v-bind:color="customColorPrimary" text @click="dialogPrimary = false">Close</v-btn>
                          <v-btn v-bind:color="customColorPrimary" text @click="setThemePrimary({ dark: customColorPrimary, light: customColorPrimary }); dialogPrimary = false">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <v-subheader class="remove-padding"><v-icon>mdi-palette</v-icon> Accent color</v-subheader>
                    <v-btn x-large class="blackwhite" v-on:click="setThemeAccent({ dark: '#E0E0E0', light: '#424242' })"></v-btn>
                    <v-btn x-large class="red" v-on:click="setThemeAccent({ dark: '#FF8A80', light: '#D50000' })"></v-btn>
                    <v-btn x-large class="blue" v-on:click="setThemeAccent({ dark: '#8C9EFF', light: '#304FFE' })"></v-btn>
                    <v-btn x-large class="purple" v-on:click="setThemeAccent({ dark: '#B388FF', light: '#4527A0' })"></v-btn>
                    <v-dialog v-model="dialogAccent" max-width="400px">
                      <template v-slot:activator="{ on }">
                        <v-btn x-large v-bind:color="customColorAccent" class="custom" v-on="on">Custom</v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <v-tabs v-bind:color="customColorAccent" centered grow>
                            <v-tab>Pick custom color</v-tab>
                          </v-tabs>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col align="center">
                                <v-color-picker v-model="customColorAccent" hide-mode-switch flat mode="hexa"></v-color-picker>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn v-bind:color="customColorAccent" text @click="dialogAccent = false">Close</v-btn>
                          <v-btn v-bind:color="customColorAccent" text @click="setThemeAccent({ dark: customColorAccent, light: customColorAccent }); dialogAccent = false">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <v-divider></v-divider>
                  </v-col>
                  <v-col cols="12" md="6">
                    <span>Logo</span>
                    <v-switch color="accent" v-model="toggleLogoHidden" label="Hide" />
                    <span>Footer</span>
                    <v-switch color="accent" v-model="toggleFooterHidden" label="Hide" />
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn text>Restore defaults</v-btn>
                <v-btn text>Load settings</v-btn>
                <v-btn text>Backup settings</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data: function () {
    return {
      customColorAccent: '#123456',
      customColorPrimary: '#123456',
      dialogAccent: false,
      dialogPrimary: false
    }
  },
  computed: {
    toggleLogoHidden: {
      get: function () {
        return this.$store.state.settingsLogoHidden
      },
      set: function () {
        this.$store.commit('hideLogo')
      }
    },
    toggleFooterHidden: {
      get: function () {
        return this.$store.state.settingsFooterHidden
      },
      set: function () {
        this.$store.commit('hideFooter')
      }
    },
    toggleDarkTheme: {
      get: function () {
        return this.$store.state.settingsThemeDark
      },
      set: function () {
        this.$store.commit('toggleDarkTheme')
      }
    }
  },
  methods: {
    setThemeAccent (e) {
      // Set colors in real time
      this.$vuetify.theme.themes.dark.accent = e.dark
      this.$vuetify.theme.themes.light.accent = e.light
      // Store colors in vuex store
      var colors = { dark: e.dark, light: e.light }
      this.$store.commit('setThemeAccent', colors)
    },
    setThemePrimary (e) {
      // Set colors in real time
      this.$vuetify.theme.themes.dark.primary = e.dark
      this.$vuetify.theme.themes.light.primary = e.light
      // Store colors in vuex store
      var colors = { dark: e.dark, light: e.light }
      this.$store.commit('setThemePrimary', colors)
    }
  }
}
</script>

<style scoped>
.remove-padding {
  padding-left: 0;
}
.blackwhite {
  background-image: linear-gradient(to bottom right, black, white);
}
</style>
