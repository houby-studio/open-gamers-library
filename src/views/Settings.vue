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
                    <v-switch v-model="localtoggleDarkTheme" v-on:change="$vuetify.theme.dark = localtoggleDarkTheme" label="Dark" />
                  </v-col>
                  <v-col cols="12" md="6">
                    <span>Logo</span>
                    <v-switch v-model="localLogoIsHidden" label="Hide" />
                    <span>Footer</span>
                    <v-switch v-model="localFooterIsHidden" label="Hide" />
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
    localLogoIsHidden: {
      get: function () {
        return this.$store.state.logoIsHidden
      },
      set: function () {
        this.$store.commit('hideLogo')
      }
    },
    localFooterIsHidden: {
      get: function () {
        return this.$store.state.footerIsHidden
      },
      set: function () {
        this.$store.commit('hideFooter')
      }
    },
    localtoggleDarkTheme: {
      get: function () {
        return this.$store.state.themeDark
      },
      set: function () {
        this.$store.commit('toggleDarkTheme')
      }
    }
  }
}
</script>
