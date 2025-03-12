// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["nuxt-swiper"],
  css: ["~/assets/main.css"],
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
  app: {
    head: {
      title: "Casa Geriatrica El Rosedal",
      meta: [
        {
          name: "description",
          content:
            "Contamos con 50 años brindado servicios de calidad al adulto mayor",
        },
        {
          name: "keywords",
          content: "casa geriátrica, residencia para adultos mayores, cuidado de ancianos, hogar para ancianos, asistencia geriátrica, centro geriátrico, bienestar para mayores, atención especializada, servicios geriátricos, residencia de ancianos",
        },
        { name: "author", content: "El Rosedal" },

        // Open Graph
        {
          property: "og:title",
          content: "Casa Geriatrica El Rosedal",
        },
        {
          property: "og:description",
          content: "Contamos con 50 años brindado servicios de calidad al adulto mayor",
        },
        { property: "og:image", content: "https://elrosedal.es/parte2/webp/3.webp" },
        { property: "og:url", content: "https://elrosedal.es/" },
        { property: "og:type", content: "website" },

        // Twitter Cards
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Casa Geriatrica El Rosedal",
        },
        {
          name: "twitter:description",
          content: "Contamos con 50 años brindado servicios de calidad al adulto mayor",
        },
        { name: "twitter:image", content: "https://elrosedal.es/parte2/webp/3.webp" },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
});
