import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        lang: 'fr',
        webSiteContent: [],
        partActiveId: 0
    }),

    actions: {
        toggleLang() {
            this.lang = this.lang === 'fr' ? 'en' : 'fr';
            this.getWebSiteContent().then();
        },

        async getWebSiteContent() {
            const content = this.lang === 'fr'
                ? await import('../static/lang/fr.json')
                : await import('../static/lang/en.json');
            this.webSiteContent = content.default;
        },

    }
});