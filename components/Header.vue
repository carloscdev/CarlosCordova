<template>
  <div class="header">
    <div class="header__scroll">
      <a class="linkAbout " href="#about">
        <font-awesome-icon
          class="color-rojo flotar"
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
    }
  }
};
</script>
<style lang="scss">
.linkAbout {
  font-size: 2.5rem;
}
.header {
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  &__scroll {
    position: absolute;
    width: 3%;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    right: 0;
    a {
      cursor: pointer;
    }
  }
  &__contenedor {
    background-image: url("../assets/img/bg-1.webp");
    background-size: 110%;
    background-position: center center;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    align-items: center;
    &--texto {
      text-align: center;
    }
    &--image {
      text-align: center;
      .imgAnimation {
        @media (max-width: 768px) {
          display: none;
        }
      }
      .imgStatic {
        padding-top: var(--margen-pequeno);
        @media (min-width: 768px) {
          display: none;
        }
      }
    }
  }
  @media (max-width: 768px) {
    &__scroll {
      width: 10%;
    }
    &__contenedor {
      grid-template-columns: 1fr;
      grid-template-areas:
        "primero"
        "segundo";
      grid-row-gap: var(--margen-minimo);
      &--image {
        grid-area: segundo;
        .aboutImg {
          max-width: 70%;
          margin: 0 auto;
        }
        &--texto {
          grid-area: primero;
        }
      }
    }
  }
}
</style>
