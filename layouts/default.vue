<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  },
  head() {
  return {
      title: "Carlos C. | Front-end",
      description: "Front-end Developer",
      script: [
        {
          src: "https://www.googletagmanager.com/ns.html?id=UA-178576561-1",
          async: true,
        },       
      ],
      meta: [
        /* Facebook */
        /* { property: "og:image", content: appConfig.logo },
        { property: "og:url", content: `${appUrl}` },
        { property: "og:title", content: title },
        { property: "og:site_name", content: title },
        { property: "og:description", content: description }, */

        /* Whatsapp */
       /*  { property: "og:image", content: appConfig.logoWhatsapp },
        { property: "og:url", content: `${appUrl}` },
        { property: "og:title", content: title },
        { property: "og:site_name", content: title },
        { property: "og:description", content: description },
 */
        /* Twitter */
/*         { name: "twitter:url", content: `${appUrl}` },
        { name: "twitter:image", content: appConfig.logo },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description }, */
      ],
    };
  }
};
</script>
<style></style>
