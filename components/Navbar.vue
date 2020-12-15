<template>
  <div class="navbar">
    <div class="navbar__contenedor contenedor">
      <div class="navbar__contenedor--sociales">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/carloscdev/"
              target="_blank"
              rel="noreferrer noopener"
              title="Linkedin @carloscdev"
              ><font-awesome-icon :icon="['fab', 'linkedin-in']"
            /></a>
          </li>
          <li>
            <a
              href="https://twitter.com/carloscdev"
              target="_blank"
              rel="noreferrer noopener"
              title="Twitter @carloscdev"
              ><font-awesome-icon :icon="['fab', 'twitter']"
            /></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/carlosc.dev/"
              target="_blank"
              rel="noreferrer noopener"
              title="Instagram @carlosc.dev"
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></a>
          </li>
          <li>
            <a
              href="https://youtube.com/user/djdarkhohuancayoperu"
              target="_blank"
              rel="noreferrer noopener"
              title="Youtube"
              ><font-awesome-icon :icon="['fab', 'youtube']"
            /></a>
          </li>
        </ul>
      </div>
      <figure class="navbar__contenedor--logo">
        <nuxt-link to="/">
          <!-- <img src="../assets/img/Abr.webp" alt="CCDEV LOGO" /> -->
          <h2 class="LogoCarlos">CCDEV<span class="color-rojo">*</span></h2>
        </nuxt-link>
      </figure>
      <div class="navbar__contenedor--menu">
        <a @click.prevent="closeMenu"
          ><font-awesome-icon :icon="['fas', 'bars']"
        /></a>
      </div>
    </div>
    <div class="navbar__completo" :class="navbarActive ? 'navbar__active' : ''">
      <div class="close" @click.prevent="closeMenu" v-if="navbarActive">
        <font-awesome-icon :icon="['fas', 'times']" />
      </div>
      <ul v-if="navbarActive">
        <li @click.prevent="closeMenu">
          <nuxt-link to="/">
            <div class="itemNav">
              Home
              <!-- <span class="color-rojo">*</span> -->
            </div>
          </nuxt-link>
        </li>
        <li @click.prevent="closeMenu">
          <nuxt-link to="/about">
            <div class="itemNav">About</div>
          </nuxt-link>
        </li>
        <li @click.prevent="closeMenu">
          <nuxt-link to="/projects">
            <div class="itemNav">Projects</div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navbarActive: false
    };
  },
  mounted() {
    this.scrolling();
  },
  methods: {
    scrolling() {
      document.addEventListener(
        "scroll",
        () => {
          const navbar = document.querySelector(".navbar");
          navbar.classList.toggle("active", window.scrollY > 100);
          navbar.classList.toggle("sombra", window.scrollY > 100);
        },
        { passive: true }
      );
    },
    closeMenu() {
      this.navbarActive = !this.navbarActive;
    }
  }
};
</script>
<style lang="scss">
@import "~/static/styles/_variables";
.navbar {
  position: fixed;
  padding-top: var(--margen-pequeno);
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  transition: $animacion-media;
  a {
    transition: $animacion-media;
    &:hover {
      color: $color-rojo;
    }
  }
  &__contenedor {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    &--sociales {
      ul {
        display: flex;
        a {
          margin-left: var(--margen-minimo);
          font-size: var(--parrafo-p);
        }
      }
    }
    &--logo {
      text-align: center;
    }
    &--menu {
      text-align: right;
      font-size: var(--parrafo-p);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      &--sociales {
        display: none;
      }
      &--logo {
        text-align: left;
      }
    }
  }
  &__completo {
    position: absolute;
    min-height: 100vh;
    background-color: rgba($color: $color-negro, $alpha: 0.99);
    top: 0;
    right: -1000px;
    width: 0;
    color: $color-blanco;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: $animacion-normal;
    .close {
      position: absolute;
      top: 5vw;
      right: 5vw;
      font-size: var(--titulo-h3);
      cursor: pointer;
      transition: $animacion-normal;
      &:hover {
        color: $color-rojo;
      }
    }
    ul {
      transition: $animacion-normal;
    }
    li {
      a {
        color: $color-blanco;
        font-size: calc(var(--titulo-h1) + 0.2vw);
        font-weight: 500;
        &:hover {
          color: $color-blanco;
        }
      }
      .itemNav {
        position: relative;
        &:before {
          content: "";
          display: block;
          width: 10%;
          height: 12px;
          background-color: $color-rojo;
          position: absolute;
          bottom: -10px;
          left: 0;
          right: 0;
          transition: $animacion-normal;
        }
        &:hover:before {
          width: 100%;
        }
      }
      .nuxt-link-exact-active div:before {
        width: 100% !important;
      }
      margin-bottom: var(--margen-pequeno);
    }
  }
}
.active {
  background-color: $color-blanco;
  padding-top: var(--margen-minimo);
  padding-bottom: var(--margen-minimo);
}
.navbar__active {
  width: 100%;
  right: 0;
}
.LogoCarlos {
  font-size: var(--titulo-h3);
  padding-bottom: 0;
  font-weight: 700;
  &:hover span {
    color: $color-negro;
  }
  span {
    transition: $animacion-media;
  }
}
</style>
