import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Maria Szubski Digital, LLC • Web Development Consultant • Freelance Front End Developer",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon', href: '/favicon.ico'
      },
      {
        // Default Font
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800,900'
      },
      {
        // Code Font
        rel: 'stylesheet',
        href: '//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css'
      },
      {
        // Milkshake Preload
        rel: 'preload',
        href: '/font.css',
        as: 'style',
      },
      {
        // Milkshake Font
        rel: 'stylesheet',
        href: '/font.css'
      },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/global.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-lazyload',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
  ],


  styleResources: {
    scss: [
      // use underscore "_" & file extension ".scss"
      'assets/scss/_var.scss'
    ]
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font', 'css'].includes(type)
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: 'autoplace'
        }
      },
    },
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
