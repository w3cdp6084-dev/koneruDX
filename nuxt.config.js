export default {
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', async: true, defer: true, body: true },
      { src: 'https://polyfill.io/v3/polyfill.min.js?version=3.52.1' },
      { src: '@/assets/js/Nav.js' },
     
    ]
  },
  srcDir: "src/",
  buildModules: [
    '@nuxtjs/google-fonts' //追加
  ],
  googleFonts: {
    families: {
      Roboto: [100, 400, 500, 700] //読み込みたいGoogle　Fontsを指定
    }
  },
  vite: {
    server: {
      port: 3001,
      hmr: {
        // protocol: 'ws',
        // host: 'localhost',
        port: 3001,
      }
    }
  }
}