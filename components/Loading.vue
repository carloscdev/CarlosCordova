<template>
  <div class="loading">
    <div class="loading__contenedor">
      <lottie
        class="animation"
        :options="lottieOptions"
        v-on:animCreated="handleAnimation"
      />
    </div>
  </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/img/loading.json";
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
.loading {
  &__contenedor {
    width: 300px;
    margin: 0 auto;
    padding: var(--margen-mediano) 0;
  }
}
</style>