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
        </ul>
      </div>
      <figure class="navbar__contenedor--logo">
        <nuxt-link to="/"
          ><img src="../assets/img/Abr.png" alt="Lentes"
        /></nuxt-link>
      </figure>
      <div class="navbar__contenedor--menu">
        <a href="#"><font-awesome-icon :icon="['fas', 'bars']"/></a>
        <a href="#"><font-awesome-icon :icon="['fas', 'times']"/></a>
      </div>
    </div>
    <div class="navbar__completo">
      <div class="navbar__completo--menu">
        <div class="navbar__completo--item">
          <a href="#">
            <font-awesome-icon class="menuIcon" :icon="['fas', 'user']" />
          </a>
        </div>
        <div class="navbar__completo--item">
          <a href="#">
            <font-awesome-icon class="menuIcon" :icon="['fas', 'envelope']" />
          </a>
        </div>
        <div class="navbar__completo--item">
          <a href="#">
            <font-awesome-icon class="menuIcon" :icon="['fas', 'gamepad']" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarOcultar: "navbarOcultar",
      navbarArriba: "navbarArriba"
    };
  },
  mounted() {
    this.scrolling();
  },
  methods: {
    scrolling() {
      document.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("active", window.scrollY > 100);
        navbar.classList.toggle("sombra", window.scrollY > 100);
      });
    },
    closeMenu() {
      $(".navbar__phone--menu nav").toggleClass(this.navbarArriba);
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
      img {
        width: 120px;
      }
    }
    &--menu {
      text-align: right;
      font-size: var(--parrafo-p);
    }
  }
  &__completo {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  @media (max-width: 768px) {
    &__contenedor {
      grid-template-columns: repeat(2, 1fr);
      &--sociales {
        display: none;
      }
      &--logo {
        text-align: left;
      }
    }
  }
}
.active {
  background-color: $color-blanco;
  padding-top: var(--margen-minimo);
  padding-bottom: var(--margen-minimo);
}
</style>
