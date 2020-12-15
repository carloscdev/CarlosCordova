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
          <h3 class="services__contenedor--icon color-blanco">
            <font-awesome-icon :icon="[thing.pre, thing.icon]" />
          </h3>
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
            "Custom website design and development, using technologies such as Vue Js, React Js, etc."
        },
        {
          pre: "fas",
          icon: "pencil-ruler",
          title: "Design UI/UX",
          description:
            "I create attractive and intuitive designs for your business or company. I use Figma and AdobeXD"
        },
        {
          pre: "fas",
          icon: "chalkboard-teacher",
          title: "Lessons",
          description:
            "If you are starting to create web pages, I can teach you everything I learned throughout my career."
        },
        {
          pre: "fas",
          icon: "photo-video",
          title: "Multimedia edition",
          description:
            "I am learning to edit photos and videos, it is a long process but I enjoy it. I use Photoshop and Filmora."
        },
        {
          pre: "fab",
          icon: "youtube",
          title: "Video Tutorials",
          description:
            "On my YouTube channel I upload video tutorials on web development and technology."
        },
        {
          pre: "fas",
          icon: "laptop",
          title: "Content Creation",
          description:
            "I have experience creating content for social networks like Facebook and Instagram."
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
    @media (max-width: 480px) {
      &--lista {
        grid-template-columns: 1fr;
      }
    }
    &--icon {
      transition: $animacion-normal;
      padding: 0;
    }
  }
}
</style>
