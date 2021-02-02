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
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
