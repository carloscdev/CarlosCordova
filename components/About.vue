<template>
  <div class="about">
    <div class="about__contenedor contenedor espacio">
      <div
        class="about__contenedor--texto"
        data-aos="fade-right"
        data-aos-easing="linear"
      >
        <h2>About <span class="rojo">Me</span></h2>
        <p>
          My name is Carlos Córdova. I'm a front-end developer, with experience
          in various projects for different parts of Peru. I studied Systems
          Engineer at the Continental University and complemented my studies at
          many institutions.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=51962666663&text=Hola,%20¿Podemos%20conversar%20ahora?"
          target="_blank"
          rel="noreferrer noopener"
          class="btn-primary sombra"
        >
          <span><font-awesome-icon :icon="['fab', 'whatsapp']"/></span>
          Contact Me</a
        >
      </div>
      <div class="about__contenedor--image">
        <img
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          class="bg-2"
          width="500px"
          src="../assets/img/bg-2.webp"
          alt="Fondo"
          v-lazy-load
        />
        <img
          data-aos="fade-left"
          data-aos-easing="linear"
          width="500px"
          class="me sombra"
          src="../assets/img/me.webp"
          alt="Carlos Córdova"
          v-lazy-load
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About"
};
</script>
<style lang="scss">
.about {
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  &__contenedor {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    grid-column-gap: var(--margen-mediano);
    &--texto {
      p {
        margin-bottom: var(--margen-pequeno);
      }
    }
    &--image {
      position: relative;
      text-align: right;
      img {
        border-radius: 20px;
        width: 85%;
      }
      .bg-2 {
        position: absolute;
        z-index: 0;
        left: 0;
        top: 60px;
      }
      .me {
        position: relative;
        z-index: 1;
      }
    }
  }
  @media (max-width: 768px) {
    &__contenedor {
      grid-template-columns: 1fr;
      grid-row-gap: var(--margen-mediano);
      &--image {
        img {
          width: 100%;
        }
        .bg-2 {
          display: none;
        }
      }
    }
  }
}
</style>
