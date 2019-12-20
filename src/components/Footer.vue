<template>
    <v-footer v-if="!isHidden" fixed class="footer font-weight-medium">
      <v-col class="text-center" cols="12">
        <strong><v-icon>mdi-mushroom</v-icon> Houby Studio</strong>
        {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
</template>

<script>
export default {
  name: 'footer-bar',
  computed: {
    isHidden () {
      return this.$store.state.footerIsHidden
    }
  }
}
</script>
