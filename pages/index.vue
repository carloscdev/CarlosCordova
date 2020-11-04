<template>
  <div class="">
    <Navbar />
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
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
export default {
  components: {
    Navbar,
    Header,
    About,
    Experience,
    Projects
  }
};
</script>

<style lang="scss">
@import "~/static/styles/global.scss";
</style>
