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
              Made with <v-icon>mdi-heart</v-icon>
            </v-card-subtitle>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <p>OGL Version {{ version }}</p>
                  <span>Scheme</span>
                  <v-switch v-model="$vuetify.theme.dark" primary label="Dark" />
                </v-col>
                <v-col cols="12" md="6">
                  <span>Drawer</span>
                  <v-radio-group v-model="primaryDrawer.type" column>
                    <v-radio
                      v-for="drawer in drawers"
                      :key="drawer"
                      :label="drawer"
                      :value="drawer.toLowerCase()"
                      primary
                    />
                  </v-radio-group>
                  <v-switch v-model="primaryDrawer.clipped" label="Clipped" primary />
                  <v-switch v-model="primaryDrawer.floating" label="Floating" primary />
                  <v-switch v-model="primaryDrawer.mini" label="Mini" primary />
                </v-col>
                <v-col cols="12" md="6">
                  <span>Footer</span>
                  <v-switch label="Inset" primary />
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn text>Cancel</v-btn>
              <v-btn text color="primary">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { remote } from 'electron'

export default {
  name: 'profile',
  components: {
    // Header
  },
  data: () => ({
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: null,
      type: 'default (no property)',
      clipped: false,
      floating: false,
      mini: false
    },
    version: remote.app.getVersion()
  })
}
</script>
