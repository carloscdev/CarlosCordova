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
    <section id="services">
      <Services />
    </section>
    <section id="projects">
      <Projects :projects="projects" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: "1",
          title: "Zosma Team",
          image: "https://i.ibb.co/55t4KB5/zosma-new.webp",
          site: "https://zosma.pe",
          data: "Oct - 2020",
          place: "Huancayo - Perú",
          description: "Website with Nuxt Js - Lottie Js"
        },
        {
          id: "2",
          title: "Portfolio Dark",
          image: "https://i.ibb.co/tY4hhgR/portafolio-dark.webp",
          site: "https://ernesto.softaki.com",
          data: "Sep - 2020",
          place: "Lima - Perú",
          description: "Website with Nuxt Js - Graphql"
        },
        {
          id: "3",
          title: "View More Projects",
          image: "https://i.postimg.cc/NFHknT0L/all-projects.png",
          site: "https://carlosc.tech/projects",
          data: "Since 2018",
          place: "Perú",
          description: "Website with many technologies"
        }
      ]
    };
  },
  // Schema
  jsonld() {
    return {
      "@context": "http://schema.org",
      "@type": "WebPage",
      name: "Carlos C. | Front-end",
      url: "https://carlosc.tech",
      description: "Front-end Developer"
    };
  }
};
</script>

<style lang="scss"></style>
