export default {
  srcDir: "src/",
  buildModules: [
    '@nuxtjs/google-fonts' //追加
  ],
  googleFonts: {
    families: {
      Roboto: [100, 400, 500, 700] //読み込みたいGoogle　Fontsを指定
    }
  },
  scss: ["@/assets/style/styles.scss"],
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