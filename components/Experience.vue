<template>
  <div class="experience">
    <div class="experience__contenedor contenedor espacio">
      <div
        class="experience__contenedor--lista"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <h3>
          <span class="number">01.</span> Experience
          <span class="color-rojo">*</span>
        </h3>
        <p>
          + 2 years of experience as a front-end developer, I also have some
          experience as a backend.
        </p>
        <div class="rojo"></div>
      </div>
      <div
        class="experience__contenedor--lista"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <h3>
          <span class="number">02.</span> Projects
          <span class="color-rojo">*</span>
        </h3>
        <p>
          I worked on many projects, for different parts of Peru (Lima,
          Pucallpa, Huancayo).
        </p>
        <div class="rojo"></div>
      </div>
      <div
        class="experience__contenedor--lista"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <h3>
          <span class="number">03.</span> Hobbies
          <span class="color-rojo">*</span>
        </h3>
        <p>
          I practice capoeira for more than 5 years, I belong to the Cordão de
          Ouro group.
        </p>
        <div class="rojo"></div>
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
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  color: $color-humo;
  h3 {
    color: $color-humo;
  }
  background-color: $color-negro;
  &__contenedor {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: var(--margen-mediano);
    .rojo {
      margin-top: var(--margen-pequeno);
      width: 15%;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-row-gap: var(--margen-mediano);
    }
  }
}
</style>
