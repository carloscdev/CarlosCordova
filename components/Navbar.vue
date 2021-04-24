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
              href="https://www.youtube.com/channel/UCIpwDrk2cmOhsfBtHcWHDHA/videos"
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
            </div>
          </nuxt-link>
        </li>
        <li @click.prevent="closeMenu">
          <nuxt-link to="/tutorials">
            <div class="itemNav">Tutoriales</div>
          </nuxt-link>
        </li>
        <li @click.prevent="closeMenu">
          <nuxt-link to="/projects">
            <div class="itemNav">Projectos</div>
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
