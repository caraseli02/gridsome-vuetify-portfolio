// v2.0
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css';
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, head }) {

    head.meta.push(
        {
            name: 'description',
            content: 'Wep Portfolio Vlad'
        },
        {
            property: 'og:title',
            content: "I’m programmer, developer and designer. My passion is to build modern and fast by default web apps."
        },
        {property: 'og:site_name', content: 'Wep Portfolio Vlad'},
        {property: 'og:url', content: 'caraseli.com'},
        {property: 'og:type', content: 'website'},
        {
            property: 'og:image',
            content: 'https://media-exp1.licdn.com/dms/image/C5603AQHCascweZqJWw/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=La_ZltzGezkQE-wB7VL4Bd-X0KAxjQXepHFdwUnvNFM'
        },
        {name: 'robots', content: 'index,follow'},
        {
            property: 'twitter:description',
            content: "I’m programmer, developer and designer. My passion is to build modern and fast by default web apps."
        },
        {
            property: 'twitter:title',
            content: "Vlad web Portfolio"
        },
        {property: 'twitter:creator', content: 'Vlad'},
        {property: 'twitter:site', content: 'caraseli.com'},
        {property: 'twitter:type', content: 'website'},
        {
            property: 'twitter:image',
            content: 'https://media-exp1.licdn.com/dms/image/C5603AQHCascweZqJWw/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=La_ZltzGezkQE-wB7VL4Bd-X0KAxjQXepHFdwUnvNFM'
        },
    )

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

    const opts = {
        theme: {
            light: {
                primary: '#FFFFFF',
            },
            dark: {
                primary: '#000000',
            },
        },
    }; // opts includes, vuetify themes, icons, etc.
    Vue.use(Vuetify);
    appOptions.vuetify = new Vuetify(opts);

    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}
