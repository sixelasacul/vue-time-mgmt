import Vue from "vue"
import Vuetify from "vuetify/lib/framework"
import colors from "vuetify/lib/util/colors"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.green.base,
        secondary: colors.green.lighten1,
        accent: colors.green.accent1,
        warning: colors.orange.base,
        danger: colors.red.base
      }
    }
  },
  icons: {
    iconfont: "mdiSvg"
  }
})
