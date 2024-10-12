// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    ssr: true,

    devtools: { enabled: true },

    modules: [
        '@pinia/nuxt',
    ],

    css : [
        '~/assets/styles/styles.scss'
    ],

    plugins: [
        '~/plugins/pinia.ts',
    ],


})
