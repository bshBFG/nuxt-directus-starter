// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', 'nuxt-icon', '@nuxtjs/google-fonts'],

  css: ['@unocss/reset/tailwind.css', '~/assets/css/main.css'],

  googleFonts: {
    families: {
      Roboto: [400, 500, 700],
    },
  },

  devtools: { enabled: true },
})
