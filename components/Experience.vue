<template>
  <div class="experience">
    <div class="experience__contenedor contenedor espacio">
      <div
        class="experience__contenedor--lista sombra"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <h3>
          <span class="number color-rojo">01</span>
          Experience
        </h3>
        <p>
          + 2 years of experience as a front-end developer, I also have some
          experience as a backend.
        </p>
      </div>
      <div
        class="experience__contenedor--lista sombra"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <h3>
          <span class="number color-rojo">02</span>
          Projects
        </h3>
        <p>
          I worked on many projects, for different parts of Peru (Lima,
          Pucallpa, Huancayo).
        </p>
      </div>
      <div
        class="experience__contenedor--lista sombra"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <h3>
          <span class="number color-rojo">03</span>
          Hobbies
        </h3>
        <p>
          I practice capoeira for more than 5 years, I belong to the Cordão de
          Ouro group.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Experience"
};
</script>
<style lang="scss">
@import "~/static/styles/_variables";
.experience {
  overflow: hidden;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  color: $color-negro;
  h3 {
    color: $color-negro;
  }
  background-color: $color-blancoFondo;
  &__contenedor {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: var(--margen-pequeno);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-row-gap: var(--margen-mediano);
    }

    &--lista {
      background-color: $color-blanco;
      padding: var(--margen-pequeno);
      border-radius: 20px;
    }
  }
}
</style>
