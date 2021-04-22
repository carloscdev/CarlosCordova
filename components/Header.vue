<template>
  <div class="header">
    <div class="header__scroll">
      <a class="linkAbout" @click="go('about')">
        <small>scroll down</small>
        <font-awesome-icon
          class="color-rojo flotar flecha"
          :icon="['fas', 'chevron-down']"
        />
      </a>
    </div>
    <div class="header__contenedor contenedor espacio">
      <div class="header__contenedor--image">
        <lottie
          class="aboutImg animationLeft"
          :options="lottieOptions"
          v-on:animCreated="handleAnimation"
        />
      </div>
      <div class="header__contenedor--texto animationRight">
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
    },
    go(ancla) {
      const el = document.getElementById(ancla)
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
};
</script>
