<template>
  <div class="services">
    <div class="services__contenedor contenedor">
      <h2 class="color-blanco" data-aos="fade-down" data-aos-easing="linear">
        Que hago?
      </h2>
      <div class="services__contenedor--lista ">
        <div
          class="services__contenedor--item"
          data-aos="fade-left"
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
          title: "Desarollo Web",
          description:
            "Desarrollo front-end con tecnologías como Vue Js, Nuxt Js, React Js, Firebase, etc."
        },
        {
          pre: "fas",
          icon: "pencil-ruler",
          title: "Diseño UI/UX",
          description:
            "Me encanta el diseño de interfaces, utilizo programas como Figma y AdobeXD."
        },
        {
          pre: "fas",
          icon: "chalkboard-teacher",
          title: "Asesoría",
          description:
            "Si estás iniciando y tienes dudas no dudes en contactarme que te ayudaré con mucho gusto.  "
        },
        {
          pre: "fas",
          icon: "photo-video",
          title: "Edición Multimedia",
          description:
            "Estoy aprendiendoo a editar fotos y videos en programas como Photoshop y Filmora."
        },
        {
          pre: "fab",
          icon: "youtube",
          title: "Videos",
          description:
            "En mi canal de Youtube podrás encontrar tutoriales que te ayudarán a mejorar tus habilidades."
        },
        {
          pre: "fas",
          icon: "laptop",
          title: "Creación de contenido",
          description:
            "Tengo experiencia con varias empresas manejando sus redes sociales como Facebook e Instagram."
        }
      ]
    };
  }
};
</script>
