// v2.0
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, head }) {

    /*appOptions.i18n.setLocaleMessage('es', require('./locales/es.json'))
    appOptions.i18n.setLocaleMessage('ru', require('./locales/ru.json'))
    appOptions.i18n.setLocaleMessage('ro-md', require('./locales/ro-md.json'))
    appOptions.i18n.setLocaleMessage('en-gb', require('./locales/en-gb.json'))*/
    /*head.link.push({
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
    });

    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
    });*/

    const opts = {}; // opts includes, vuetify themes, icons, etc.
    Vue.use(Vuetify);
    appOptions.vuetify = new Vuetify(opts);

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}
