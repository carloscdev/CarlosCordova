<template>
  <div class="header">
    <div class="header__scroll">
      <a @click="go('about')">
        <lottie
          class="aboutImg"
          :options="lottieScroll"
          v-on:animCreated="handleAnimation"
        />
      </a>
    </div>
    <div class="header__contenedor contenedor espacio">
      <div class="header__contenedor--image">
        <lottie
          class="aboutImg animationLeft imgAnimation"
          :options="lottieOptions"
          v-on:animCreated="handleAnimation"
        />
        <img
          class="aboutImg animationLeft imgStatic"
          src="../assets/img/person.webp"
          alt="Person with Laptop"
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
import $ from "jquery";
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/assets/img/person.json";
import * as animationScroll from "~/assets/img/scroll.json";
export default {
  name: "Header",
  components: {
    lottie
  },
  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: animationData.default },
      lottieScroll: { animationData: animationScroll.default }
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    go(ancla) {
      var position = $("#" + ancla).position();
      $("html, body").animate({ scrollTop: position.top - 20 }, 600);
    }
  }
};
</script>
<style lang="scss">
.header {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url("../assets/img/bg-1.webp");
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
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
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    align-items: center;
    &--texto {
      text-align: center;
      h1 {
        margin-bottom: var(--margen-pequeno);
      }
    }
    &--image {
      text-align: center;
      .imgAnimation {
        @media (max-width: 768px) {
          display: none;
        }
      }
      .imgStatic {
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
