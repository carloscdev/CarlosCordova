<template>
  <div class="services">
    <div class="services__contenedor contenedor">
      <h2 class="color-blanco" data-aos="fade-down" data-aos-easing="linear">
        What I do?
      </h2>
      <div class="services__contenedor--lista ">
        <div
          class="services__contenedor--item"
          data-aos="zoom-out-left"
          v-for="(thing, index) in things"
          :key="index"
        >
          <div class="services__contenedor--icon color-blanco">
            <font-awesome-icon :icon="[thing.pre, thing.icon]" />
          </div>
          <h4>{{ thing.title }}</h4>
          <span>
            {{ thing.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      things: [
        {
          pre: "fas",
          icon: "desktop",
          title: "Web Development",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, facere."
        },
        {
          pre: "fas",
          icon: "pencil-ruler",
          title: "Design UI/UX",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, facere."
        },
        {
          pre: "fas",
          icon: "chalkboard-teacher",
          title: "Lessons",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, facere."
        },
        {
          pre: "fas",
          icon: "photo-video",
          title: "Multimedia edition",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, facere."
        },
        {
          pre: "fab",
          icon: "youtube",
          title: "Video Tutorials",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, facere."
        },
        {
          pre: "fas",
          icon: "laptop",
          title: "Content Creation",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, facere."
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "~/static/styles/_variables";
.services {
  background-color: $color-negro;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: $color-humo;
  overflow: hidden;
  &__contenedor {
    &--lista {
      margin-top: var(--margen-pequeno);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: var(--margen-grande);
      text-align: left;
      h4 {
        margin-top: var(--margen-minimo);
        margin-bottom: var(--margen-minimo);
      }
      span {
        font-weight: 300;
      }
    }
    &--item {
      &:hover .services__contenedor--icon {
        color: $color-rojo;
      }
    }
    @media (max-width: 768px) {
      padding-top: var(--margen-grande);
      padding-bottom: var(--margen-grande);
      &--lista {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    &--icon {
      font-size: var(--titulo-h3);
      transition: $animacion-normal;
    }
  }
}
</style>
