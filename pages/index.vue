<template>
  <div class="">
    <header id="header">
      <Header />
    </header>
    <section id="about">
      <About />
    </section>
    <section id="experience">
      <Experience />
    </section>
    <section id="projects">
      <Projects />
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
export default {
  components: {
    Header,
    About,
    Experience,
    Projects
  }, 

  mounted() {
    // Barra de progreso de carga
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 5000);
    });
  }
};
</script>

<style lang="scss">
@import "~/static/styles/global.scss";
</style>
