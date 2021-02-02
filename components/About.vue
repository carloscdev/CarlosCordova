<template>
  <div class="about">
    <div class="about__contenedor contenedor espacio">
      <div
        class="about__contenedor--texto"
        data-aos="fade-right"
        data-aos-easing="linear"
      >
        <h2>Sobre <span class="rojo">Mi</span></h2>
        <p>
          Hola!!! Soy desarrollador Front-end, estudié Ingeniería de Sistemas e
          Informática en Huancayo Perú. Tuve la oportunidad de estudiar por un
          periodo de tiempo en la Universidad Tecnológica de Huejotzingo en
          Puebla México.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=51962666663&text=Hola,%20¿Podemos%20conversar%20ahora?"
          target="_blank"
          rel="noreferrer noopener"
          class="btn-primary sombra"
        >
          <span><font-awesome-icon :icon="['fab', 'whatsapp']"/></span>
          Escríbeme</a
        >
      </div>
      <div class="about__contenedor--image">
        <img
          data-aos="fade-left"
          data-aos-easing="linear"
          class="me sombra"
          src="../assets/img/me.webp"
          alt="Carlos Córdova"
        />
      </div>
    </div>
  </div>
</template>
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
      }
    }
  }
}
</style>
