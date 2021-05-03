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
    <section id="help">
      <Help />
    </section>
  </div>
</template>

<script>
export default {
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
