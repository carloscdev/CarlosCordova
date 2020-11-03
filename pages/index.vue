<template>
  <div class="">
    <Navbar />
    <header id="header">
      <Header />
    </header>
    <div id="about"></div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
export default {
  components: {
    Header,
    Navbar
  }
};
</script>

<style lang="scss">
@import "~/static/styles/global.scss";
</style>
