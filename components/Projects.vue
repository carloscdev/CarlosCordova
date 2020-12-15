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
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <img
                :src="require(`../assets/img/Proyectos/${project.image}`)"
                :alt="project.title"
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
  data() {
    return {
      showCarousel: false
    };
  },
  props: {
    projects: {}
  },
  mounted() {
    // Vue.use(VueCarousel);
    this.showCarousel = true;
  }
};
</script>
