<template>
  <div class="projects">
    <div class="projects__contenedor espacio">
      <h2 class="contenedor" data-aos="fade-down" data-aos-easing="linear">
        Last <span class="rojo">Projects</span>
      </h2>
      <carousel
        v-if="showCarousel"
        :perPage="1"
        :mouseDrag="true"
        :touchDrag="true"
        :paginationEnabled="true"
        :autoplay="true"
        :loop="true"
        :autoplayTimeout="5000"
        :scrollPerPage="true"
        paginationActiveColor="#ef0838"
        class="projects__carrusel"
      >
        <slide>
          <div class="projects__slider contenedor">
            <div
              class="projects__slider--imagen"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <img
                src="../assets/img/projects/zosma-new.png"
                alt="Zosma Team"
              />
            </div>
            <div
              class="projects__slider--texto"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              <h3>Zosma Team</h3>
              <ul>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'asterisk']"
                  />Website with Nuxt Js - Lottie Js
                </li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'calendar-day']"
                  />Oct - 2020
                </li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'map-marker-alt']"
                  />Huancayo - Perú
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    <font-awesome-icon
                      class="icon"
                      :icon="['fas', 'link']"
                    />Visit Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </slide>
        <slide>
          <div class="projects__slider contenedor">
            <div
              class="projects__slider--imagen"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <img src="../assets/img/projects/upc-app.png" alt="UPC App" />
            </div>
            <div
              class="projects__slider--texto"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              <h3>UPC</h3>
              <ul>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'asterisk']"
                  />Landing Page with Bootstrap - Js
                </li>
                <li></li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'calendar-day']"
                  />Oct - 2020
                </li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'map-marker-alt']"
                  />
                  Lima - Perú
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    <font-awesome-icon class="icon" :icon="['fas', 'link']" />
                    Visit Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </slide>
        <slide>
          <div class="projects__slider contenedor">
            <div
              class="projects__slider--imagen"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <img
                src="../assets/img/projects/portafolio-dark.png"
                alt="Portfolio Dark"
              />
            </div>
            <div
              class="projects__slider--texto"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              <h3>Portfolio Dark</h3>
              <ul>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'asterisk']"
                  />Website with Nuxt Js - Graphql
                </li>
                <li></li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'calendar-day']"
                  />Sep - 2020
                </li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'map-marker-alt']"
                  />
                  Lima - Perú
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    <font-awesome-icon class="icon" :icon="['fas', 'link']" />
                    Visit Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </slide>
        <slide>
          <div class="projects__slider contenedor">
            <div
              class="projects__slider--imagen"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <img
                src="../assets/img/projects/texas-club.png"
                alt="Texas Club"
              />
            </div>
            <div
              class="projects__slider--texto"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              <h3>Texas Club</h3>
              <ul>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'asterisk']"
                  />Landing Page with Nuxt Js
                </li>
                <li></li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'calendar-day']"
                  />Sep - 2020
                </li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'map-marker-alt']"
                  />
                  Lima - Perú
                </li>
                <li>
                  <a href="#" target="_blank" rel="noreferrer noopener">
                    <font-awesome-icon class="icon" :icon="['fas', 'link']" />
                    Visit Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </slide>
        <slide>
          <div class="projects__slider contenedor">
            <div
              class="projects__slider--imagen"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <img src="../assets/img/projects/softaki.png" alt="Softaki" />
            </div>
            <div
              class="projects__slider--texto"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              <h3>Tienda Softaki</h3>
              <ul>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'asterisk']"
                  />Landing Page with Nuxt Js - Graphql
                </li>
                <li></li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'calendar-day']"
                  />Aug - 2020
                </li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'map-marker-alt']"
                  />
                  Lima - Perú
                </li>
                <li>
                  <a
                    href="https://tiendavirtual.softaki.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <font-awesome-icon class="icon" :icon="['fas', 'link']" />
                    Visit Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </slide>
        <slide>
          <div class="projects__slider contenedor">
            <div
              class="projects__slider--imagen"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <img src="../assets/img/projects/vida-dent.png" alt="Vida Dent" />
            </div>
            <div
              class="projects__slider--texto"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              <h3>Vida Dent</h3>
              <ul>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'asterisk']"
                  />Website with Php - MySql
                </li>
                <li></li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'calendar-day']"
                  />Jul - 2020
                </li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'map-marker-alt']"
                  />
                  Pucallpa - Perú
                </li>
                <li>
                  <a
                    href="https://cdvidadent.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <font-awesome-icon class="icon" :icon="['fas', 'link']" />
                    Visit Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </slide>
        <slide>
          <div class="projects__slider contenedor">
            <div
              class="projects__slider--imagen"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <img
                src="../assets/img/projects/zosma-old.png"
                alt="Zosma Team"
              />
            </div>
            <div
              class="projects__slider--texto"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              <h3>Zosma Team</h3>
              <ul>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'asterisk']"
                  />Landing Page with Html5 - Css3 - Js
                </li>
                <li></li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'calendar-day']"
                  />Apr - 2020
                </li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'map-marker-alt']"
                  />
                  Huancayo - Perú
                </li>
                <li>
                  <a
                    href="https://cdvidadent.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <font-awesome-icon class="icon" :icon="['fas', 'link']" />
                    Visit Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "Projects",
  data() {
    return {
      showCarousel: false
    };
  },
  mounted() {
    // Vue.use(VueCarousel);
    this.showCarousel = true;
  }
};
</script>
<style lang="scss">
@import "~/static/styles/global.scss";
.projects {
  background-image: url("../assets/img/bg-3.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  &__contenedor {
    max-width: 100% !important;
    h2 {
      text-align: center;
    }
  }
  &__carrusel {
    margin-top: var(--margen-pequeno);
  }
  &__slider {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: var(--margen-mediano);
    align-items: center;
    .icon {
      color: $color-rojo;
      margin-right: var(--margen-minimo);
    }
    li {
      font-size: var(--parrafo-p);
      margin-bottom: var(--margen-minimo);
    }
    @media (max-width: 758px) {
      grid-template-columns: 1fr;
      grid-row-gap: var(--margen-mediano);
    }
  }
}
.VueCarousel-dot {
  width: 2vw !important;
  height: 2vw !important;
  outline: none !important;
  @media (max-width: 768px) {
    .VueCarousel-dot {
      width: 5vw !important;
      height: 5vw !important;
    }
  }
}
</style>
