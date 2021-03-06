export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: "es"
    },
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      /*       {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-178576561-1",
        async: true
      } */
    ]
  },
  /*
   ** Global CSS
   */
  css: ["./static/styles/global.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: "~plugins/vue-carousel",
      mode: "client"
    },
    {
      src: "~plugins/animated-on-scroll",
      mode: "client"
    },
    "~/plugins/jsonld"
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/fontawesome",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-178576561-1"
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ],
    /* "nuxt-lazy-load", */
    "@nuxtjs/sitemap"
  ],
  axios: {
    baseURL: 'https://ccdev-18635-default-rtdb.firebaseio.com/'
  },
  // Sitemap
  sitemap: {
    hostname: "https://carlosc.tech",
    gzip: true,
    exclude: ["/exclude-one", "/exclude-two"],
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date()
    }
  },
  generate: {
    fallback: true
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
