// v2.0
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, head }) {
    /*head.link.push({
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
    })*/

    /*head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Russo+One&display=swap',
    });*/

    const opts = {  } //opts includes, vuetify themes, icons, etc.
    Vue.use(Vuetify)

    appOptions.vuetify = new Vuetify(opts);

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}
