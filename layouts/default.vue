<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import {appConfig} from "@/env"
export default {
  components: {
    Navbar
  },
  head() {
    return {      
      title: "Carlos C. | Front-end",
      noscript: [{ innerHTML: "Body No Scripts", body: true }],
      script: [
        {
          src: "https://www.googletagmanager.com/ns.html?id=UA-178576561-1",
          async: true,
        },       
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Front-end Developer"
        },
        /* Facebook */
        { property: "og:image", content: appConfig.logo },
        { property: "og:url", content: appConfig.urlOficial },
        { property: "og:title", content: appConfig.title },
        { property: "og:type", content: appConfig.type },
        { property: "og:site_name", content: appConfig.title },
        { property: "og:description", content: appConfig.description },

        /* Whatsapp */
        { property: "og:image", content: appConfig.logoWhatsapp },
        { property: "og:url", content:  appConfig.urlOficial  },
        { property: "og:title", content: appConfig.title },
        { property: "og:site_name", content: appConfig.title },
        { property: "og:description", content: appConfig.description },

        /* Twitter */
        { name: "twitter:url", content:  appConfig.urlOficial  },
        { name: "twitter:image", content: appConfig.logo },
        { name: "twitter:title", content: appConfig.title },
        { name: "twitter:description", content: appConfig.description },
      ],
    };
  }
};
</script>
<style></style>
