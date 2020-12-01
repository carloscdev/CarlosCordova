<template>
  <footer class="footer ">
    <div class="footer__primera ">
      <div class="footer__primera--description contenedor">
        <h2 class="LogoCarlos">CCDEV<span class="color-rojo">*</span></h2>
        <p>Made with <a href="https://nuxtjs.org/" target="_blank" rel="noreferrer noopener">Nuxt Js</a>
         &amp; <a href="https://lottiefiles.com/" target="_blank" rel="noreferrer noopener">Lottie Js</a></p>
      </div>
    </div>
    <div class="footer__segunda ">
      <div class="footer__segunda--description contenedor">
        
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "~/static/styles/_variables";
.footer {
  background-color: $color-negro;
  color: $color-blanco;
  &__primera{
    background-color: #0e0e0e;
    &--description {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: var(--margen-pequeno);
      padding-bottom: var(--margen-pequeno);
      a{
        color: $color-rojo;
      }
      h2:hover span{
        color: $color-blanco;
      }
      h2:hover{
        color: $color-rojo;
      }
    }
  }
}
</style>