// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, md } from 'vuetify/iconsets/md'
import colors from 'vuetify/lib/util/colors'

const myCustomLightTheme = {
  dark: true,
  colors: {
    background: '#1C1C1C',
    surface: '#444444',
    primary: colors.green.base,
    secondary: colors.blue.darken3,
  //   error: '#B00020',
  //   info: '#2196F3',
  //   success: '#4CAF50',
  //   warning: '#FB8C00',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    }
  },
})
