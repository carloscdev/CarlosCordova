<template>
  <div class="aboutPage">
    <About />
  </div>
</template>
<script>
import About from '@/components/About.vue'
export default {
  name:'about',
  components: {
    About
  }
}
</script>
<style lang="scss">
.aboutPage {
  padding-top: var(--margen-grande);
}
</style>