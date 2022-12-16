export default {
  buildModules: [
    '@nuxtjs/google-fonts' //追加
  ],
  googleFonts: {
    families: {
      Roboto: [100, 400, 500, 700] //読み込みたいGoogle　Fontsを指定
    }
  },
  css: ["@/assets/style/styles.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
        },
      },
    },
  },
}