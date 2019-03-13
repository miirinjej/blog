const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffffff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/stylus/app.styl',
    { src: 'normalize.css' },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vuetify.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [ 'nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: [
            'faFacebookF',
            'faTwitter',
            'faGooglePlusG',
          ],
        },
        {
          set: '@fortawesome/free-regular-svg-icons',
          icons: [
            'faEnvelope',
          ],
        },
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: [
            'faSearch',
          ],
        },
      ],
    }],
    'nuxt-webfontloader',
    'nuxt-mq',
  ],

  /*
  ** Style resources
  */
  styleResources: {
    scss: [
      '~/assets/scss/*/*.scss',
    ],
  },

  /*
  ** Web font loader
  */
  webfontloader: {
    google: {
      families: [
        'Alegreya:400,700',
        'Roboto:300,400,500,700',
        'Source+Sans+Pro:300,400,600,700',
      ],
    },
  },

  /*
  ** Media queries
  */
  mq: {
    defaultBreakpoint: 'default',
    breakpoints: {
      xs: 600,
      sm: 960,
      md: 1264,
      lg: 1904,
      xl: Infinity,
    },
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [ /^vuetify/ ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
  },
};
