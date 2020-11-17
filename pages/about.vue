<template>
  <div class="aboutPage">
    <div id="aboutP">
      <About />
    </div>
    <div id="servicesP">
      <Services />
    </div>
  </div>
</template>
<script>
import About from "@/components/About.vue";
export default {
  name: "about",
  components: {
    About
  }
};
</script>
<style lang="scss">
.aboutPage {
  @media (max-width: 768px) {
    padding-top: var(--margen-grande);
  }
}
</style>
