<template>
  <div class="settings">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col cols="12" md="6">
                    <span>Scheme</span>
                    <v-switch v-model="toggleDarkTheme" v-on:change="$vuetify.theme.dark = toggleDarkTheme" label="Dark" />
                  </v-col>
                  <v-col cols="12" md="6">
                    <span>Logo</span>
                    <v-switch v-model="toggleLogoHidden" label="Hide" />
                    <span>Footer</span>
                    <v-switch v-model="toggleFooterHidden" label="Hide" />
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
  }
}
</script>
