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
              ><font-awesome-icon :icon="['fab', 'linkedin-in']"
            /></a>
          </li>
          <li>
            <a
              href="https://twitter.com/carloscdev"
              target="_blank"
              rel="noreferrer noopener"
              ><font-awesome-icon :icon="['fab', 'twitter']"
            /></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/carlosc.dev/"
              target="_blank"
              rel="noreferrer noopener"
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style lang="scss">
@import "~/static/styles/global.scss";
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  a {
    transition: $animacion-media;
    &:hover {
      color: $color-rojo;
    }
  }
  &__contenedor {
    padding-top: $margen-pequeno;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    &--sociales {
      ul {
        display: flex;
        a {
          margin-left: $margen-minimo;
          font-size: $parrafo-p;
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
      font-size: $parrafo-p;
    }
  }
}
</style>
