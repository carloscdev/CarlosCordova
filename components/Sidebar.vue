<template>
  <div class="navbar">
    <div class="navbar__total" :class="!navbarActive ? 'navbar__oculto' : ''">
      <div class="navbar__contenedor contenedor">
        <div class="navbar__contenedor--sociales">
          <ul>
            <li>
              <a
                href="https://ko-fi.com/carloscdev"
                target="_blank"
                rel="noreferrer noopener"
                title="Ko-fi"
                ><font-awesome-icon :icon="['fas', 'mug-hot']"
              /></a>
            </li>
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
    </div>
    <div
      class="navbar__completo"
      :class="sidebarActive ? 'navbar__active' : ''"
    >
      <div class="close" @click.prevent="closeMenu" v-if="sidebarActive">
        <font-awesome-icon :icon="['fas', 'times']" />
      </div>
      <ul v-if="sidebarActive">
        <li @click.prevent="closeMenu">
          <nuxt-link to="/">
            <div class="itemNav">
              Inicio
              <!-- <span class="color-rojo">*</span> -->
            </div>
          </nuxt-link>
        </li>
        <li @click.prevent="closeMenu">
          <nuxt-link to="/about">
            <div class="itemNav">Sobre Mi</div>
          </nuxt-link>
        </li>
        <li @click.prevent="closeMenu">
          <nuxt-link to="/projects">
            <div class="itemNav">Proyectos</div>
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
      navbarActive: true,
      sidebarActive: false
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
          const navbar = document.querySelector(".navbar__total");
          navbar.classList.toggle("active", window.scrollY > 100);
          navbar.classList.toggle("sombra", window.scrollY > 100);
        },
        { passive: true }
      );
    },
    closeMenu() {
      this.sidebarActive = !this.sidebarActive;
      this.navbarActive = !this.navbarActive;
    }
  }
};
</script>
