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
