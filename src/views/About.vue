<template>
  <div class="profile">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-card>
            <v-card-title>
              <h1>About</h1>
            </v-card-title>
            <v-card-subtitle>
              Made with <v-icon>mdi-heart</v-icon> for <v-icon>mdi-gamepad-variant</v-icon>
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <p>OGL Version {{ version }}</p>
                  <p><a href="https://github.com/houby-studio/open-gamers-library/releases/latest" target="_blank"><v-icon>mdi-github-circle</v-icon>GitHub Releases</a></p>
                </v-col>
                <v-col>
                  <p>Originally made as a small project, which turned out to be a small project. From gamer for gamers.</p>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text color="primary" @click="checkUpdates">Check For Updates</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { remote, ipcRenderer } from 'electron'

export default {
  name: 'profile',
  components: {
    // Header
  },
  data: () => ({
    version: remote.app.getVersion()
  }),
  methods: {
    checkUpdates: function () {
      ipcRenderer.send('check-for-updates')
    }
  }
}
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
