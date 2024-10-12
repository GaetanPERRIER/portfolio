import { defineStore } from 'pinia'



export const useMainStore = defineStore('main', {
    state: () => ({
        lang : 'fr',
        webSiteContent: []
    }),

    actions: {
        toggleLang(){
            this.lang = this.lang === 'fr' ? 'en' : 'fr'
            this.getWebSiteContent().then(r => console.log('lang changed'))
        },

        async getWebSiteContent(){
            const langFile = this.lang === 'fr' ? '../static/lang/fr.json' : '../static/lang/en.json'
            const content = await import(langFile)
            this.webSiteContent = content.default
        }

    },
})

