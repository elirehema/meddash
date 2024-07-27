// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify)
export default (ctx) => {
  const vuetify = new Vuetify({
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#06065e',
          accent: '#0000',
          secondary: '#ffffff',
          success: '#f2b72d',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#9D0000'

        },
        light: {
          primary: '#3CB371',
          accent: '#000000',
          secondary: '#f49123',
          success: '#008000',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF0000',
          bg: '#006666',
          button: '#a470fd'
        }

      }
    }
  })
  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
