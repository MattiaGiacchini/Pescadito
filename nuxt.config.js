const axios = require('axios');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'menu',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    // ...
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
  ],

  //Sitemap
  sitemap: {
    exclude: [

    ],
    routes: async () => {
      // const { data } = await axios.get('https://api.spoonacular.com/food/menuItems/search?query=fish&number=50&apiKey=da752c68625d49e9b243f84515103be2');
      // console.log(data)
      // return data.menuItems.map((item) => `/products/${item.id}`);
    }
  },

  // i18n
  i18n: {
    vueI18nLoader: true,
    locales: ['en', 'es'],
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }

}
