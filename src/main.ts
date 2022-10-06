import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import moment from 'moment'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App)
  .use(router)
  .use(store)
  .use(vuetify);

app.config.globalProperties.$moment = moment;

app.config.globalProperties.$filters = {
  number(value: number) {
    if (!value) {
      return value;
    } else if (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }
}

app.mount('#app')
