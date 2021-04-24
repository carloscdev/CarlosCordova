<template>
  <div class="error">
    <div class="error__container">
        <lottie
          class="animation"
          :options="lottieOptions"
          v-on:animCreated="handleAnimation"
        />
        <nuxt-link to="/" class="btn-primary">Volver a inicio</nuxt-link>
    </div>
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/img/404.json";
export default {
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
.error {
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &__container {
    padding: 5rem 0;
    a {
      margin: 0 auto;
      margin-top: 5rem;
      z-index: 2;
    }
  }
}
</style>