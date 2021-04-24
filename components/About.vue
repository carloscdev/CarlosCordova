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
          Ingeniero de Sistemas y Desarrollador Front-end con + 2 años de
          experiencia. He trabajado con diversas tecnologías y siempre estoy
          buscando oportunidades para aprender.
          Desde inicios de Abril del 2021 empecé a crear contenido gratuito en youtube
          para desarrolladores que están iniciando, si tienes alguna consulta
          no dudes en escribirme.
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
          src="../assets/img/me.jpg"
          alt="Carlos Córdova"
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.about {
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  align-items: center;
  &__contenedor {
    display: grid;
    grid-template-columns: 1fr 0.8fr;
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
        border-radius: 50%;
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
