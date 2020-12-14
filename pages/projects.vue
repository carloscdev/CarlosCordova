<template>
  <div class="projectPage">
    <Experience />
    <Projects :projects="projects" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          id: "1",
          title: "Zosma Team",
          image: "zosma-new.webp",
          site: "https://zosma.pe",
          data: "Oct - 2020",
          place: "Huancayo - Perú",
          description: "Website with Nuxt Js - Lottie Js"
        },
        {
          id: "2",
          title: "UPC - App",
          image: "upc-app.webp",
          site: "https://miupcapp.vercel.app",
          data: "Oct - 2020",
          place: "Lima - Perú",
          description: "Landing Page with Bootstrap - Js"
        },
        {
          id: "3",
          title: "Portfolio Dark",
          image: "portafolio-dark.webp",
          site: "https://ernesto.softaki.com",
          data: "Sep - 2020",
          place: "Lima - Perú",
          description: "Website with Nuxt Js - Graphql"
        },
        {
          id: "4",
          title: "Texas Club",
          image: "texas-club.webp",
          site: "https://rocky-temple-75599.herokuapp.com",
          data: "Sep - 2020",
          place: "Lima - Perú",
          description: "Landing Page with Nuxt Js"
        },
        {
          id: "5",
          title: "Softaki Tienda",
          image: "softaki.webp",
          site: "https://tiendavirtual.softaki.com",
          data: "Aug - 2020",
          place: "Lima - Perú",
          description: "Landing Page with Nuxt Js - Graphql"
        },
        {
          id: "6",
          title: "Vida Dent",
          image: "vida-dent.webp",
          site: "https://cdvidadent.com",
          data: "Jul - 2020",
          place: "Pucallpa - Perú",
          description: "Website with PHP - MySql"
        },
        {
          id: "7",
          title: "Zosma Team",
          image: "zosma-old.webp",
          site: "https://zosma.netlify.app",
          data: "Apr - 2020",
          place: "Huancayo - Perú",
          description: "Landing Page with Html - Css - Js"
        }
      ]
    };
  }
};
</script>
