export default {

  head: {
    title: 'nuxt-portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: '#5050f5',
    height: '5px'
  },


  css: [
    '@/theme/index.scss',
    'swiper/swiper-bundle.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  serverMiddleware: [
    { path: "/api", handler: "~/api/rest.js" },
    { path: '/api/auth', handler: '~/api/routes/auth.routes.js' },
    { path: '/api/project', handler: '~/api/routes/project.routes.js' },
  ],


  plugins: [
    '@/plugins/global.js',
    '@/plugins/axios.js',
  ],


  components: true,

  buildModules: [
    //'@nuxtjs/eslint-module'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    'nuxt-element-ui',
  ],



  // proxy: {
  //   '/api/auth': '~/api/routes/auth.routes.js',
  // },

  svgSprite: {
    input: '~/assets/svg/'
  },

  // build: {
  //   extend (config, { isDev, isClient}) {
  //     if (isDev) {
  //       config.node = {
  //         fs: 'empty',
  //         net: 'empty'
  //       }
  //     }
  //   }
  // }
}
