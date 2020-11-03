<template>
  <div class="header">
    <div class="header__contenedor contenedor">
      <div class="header__contenedor--image">
        <lottie
          class="aboutImg"
          :options="lottieOptions"
          v-on:animCreated="handleAnimation"
        />
      </div>
      <div class="header__contenedor--texto">
        <h1>I'm <span>Carlos Córdova</span></h1>
        <small>Systems Engineer &amp; Front-end Developer </small>
      </div>
    </div>
  </div>
</template>
<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/img/person.json";
export default {
  name: "Header",
  components: {
    lottie
  },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default }
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    }
  }
};
</script>
<style lang="scss">
@import "~/static/styles/global.scss";
.header {
  min-height: 100vh;
  display: flex;
  align-items: center;
  &__contenedor {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    align-items: center;
    &--texto {
      text-align: center;
      h1 {
        margin-bottom: $margen-pequeno;
      }
    }
  }
}
</style>
