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
        <slide
          v-for="project in projects"
          :key="project.id"
          aria-hidden="false"
        >
          <div class="projects__slider contenedor">
            <div
              class="projects__slider--imagen"
              data-aos="fade-right"
              data-aos-easing="linear"
            >
              <img
                width="100%"
                :src="project.image"
                :alt="project.title"
                v-lazy-load
              />
            </div>
            <div
              class="projects__slider--texto"
              data-aos="fade-up"
              data-aos-easing="linear"
            >
              <h3>{{ project.title }}</h3>
              <ul>
                <li>
                  <font-awesome-icon class="icon" :icon="['fas', 'asterisk']" />
                  {{ project.description }}
                </li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'calendar-day']"
                  />{{ project.data }}
                </li>
                <li>
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'map-marker-alt']"
                  />{{ project.place }}
                </li>
                <li>
                  <a
                    :href="project.site"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
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
      </carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "Projects",
  data() {
    return {
      showCarousel: false,
      imgPreUrl: "../assets/img/projects/",
      projects: [
        {
          id: "1",
          title: "Zosma Team",
          image: "https://i.ibb.co/GVsRkCt/zosma-new.png",
          site: "https://zosma.pe",
          data: "Oct - 2020",
          place: "Huancayo - Perú",
          description: "Website with Nuxt Js - Lottie Js"
        },
        {
          id: "2",
          title: "UPC - App",
          image: "https://i.ibb.co/2sgQPvv/upc-app.png",
          site: "https://miupcapp.vercel.app/",
          data: "Oct - 2020",
          place: "Lima - Perú",
          description: "Landing Page with Bootstrap - Js"
        },
        {
          id: "3",
          title: "Portfolio Dark",
          image: "https://i.ibb.co/1zqRdxs/portafolio-dark.png",
          site: "https://ernesto.softaki.com/",
          data: "Sep - 2020",
          place: "Lima - Perú",
          description: "Website with Nuxt Js - Graphql"
        }
        /*         {
          id: "4",
          title: "Texas Club",
          image: "https://i.ibb.co/VHxfNQC/texas-club.png",
          site: "https://rocky-temple-75599.herokuapp.com/",
          data: "Sep - 2020",
          place: "Lima - Perú",
          description: "Landing Page with Nuxt Js"
        },
        {
          id: "5",
          title: "Softaki Tienda",
          image: "https://i.ibb.co/Qmf17FS/softaki.png",
          site: "https://tiendavirtual.softaki.com/",
          data: "Aug - 2020",
          place: "Lima - Perú",
          description: "Landing Page with Nuxt Js - Graphql"
        },
        {
          id: "6",
          title: "Vida Dent",
          image: "https://i.ibb.co/ZK8YFF6/vida-dent.png",
          site: "https://cdvidadent.com/",
          data: "Jul - 2020",
          place: "Pucallpa - Perú",
          description: "Website with PHP - MySql"
        },
        {
          id: "7",
          title: "Zosma Team",
          image: "https://i.ibb.co/vQsHLdH/zosma-old.png",
          site: "https://zosma.netlify.app/",
          data: "Apr - 2020",
          place: "Huancayo - Perú",
          description: "Landing Page with Html - Css - Js"
        } */
      ]
    };
  },
  mounted() {
    // Vue.use(VueCarousel);
    this.showCarousel = true;
  }
};
</script>
<style lang="scss">
@import "~/static/styles/_variables";
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
    cursor: w-resize;
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
    width: 5vw !important;
    height: 5vw !important;
    padding: 2vw !important;
  }
}
</style>
