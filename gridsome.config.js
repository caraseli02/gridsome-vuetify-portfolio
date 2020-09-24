// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Gridsome',
    plugins: [
        {
            use: "gridsome-plugin-i18n",
            options: {
                locales: [ // locales list
                    'es',
                    'ru',
                    'ro-md',
                    'en-gb'
                ],
                pathAliases: { // path segment alias for each locales
                    'ru': 'ru',
                    'es': 'es',
                    'ro-md': 'ro',
                    'en-gb': 'en'
                },
                fallbackLocale: 'en-gb', // fallback language
                defaultLocale: 'en-gb', // default language
                enablePathRewrite: true, // rewrite path with locale prefix, default: true
                rewriteDefaultLanguage: true, // rewrite default locale, default: true
                messages: {
                    'es': require('./src/locales/es.json'), // Messages files
                    'ru': require('./src/locales/ru.json'),
                    'ro-md': require('./src/locales/ro-md.json'),
                    'en-gb': require('./src/locales/en-gb.json'),
                }
            }
        },
        {
            use: 'gridsome-plugin-purgecss',
            // default options, the following will be included if you don't provide anything
            options: {
                content: [
                    './src/**/*.vue',
                    './src/**/*.js',
                    './src/**/*.jsx',
                    './src/**/*.pug',
                    './src/**/*.md'
                ],
                defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
            }
        }
    ],
    chainWebpack: config => {
        config.resolve.alias.set('@img', '@/assets/img')
    },
}
