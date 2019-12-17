<template>
  <div class="library">
    <Header msg="Yeah baby"/>
    <p>Here resides view</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'library',
  components: {
    Header
  }
}
</script>
