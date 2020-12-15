<template>
  <div class="aboutPage">
    <SubHeader :title="'About Me'" :description="'Get to know me better'" />
    <div id="servicesP">
      <Services />
    </div>
    <div id="aboutP">
      <About />
    </div>
  </div>
</template>
<script>
export default {
  name: "about"
};
</script>
<style lang="scss">
.aboutPage {
  @media (max-width: 768px) {
    padding-top: var(--margen-grande);
  }
}
</style>
