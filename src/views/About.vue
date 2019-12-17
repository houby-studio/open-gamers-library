<template>
  <div class="profile">
    <h1>About</h1>
    <p>Made with <v-icon>mdi-heart</v-icon></p>
    <p>OGL Version {{ version }}</p>
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
    version: remote.app.getVersion()
  })
}
</script>
