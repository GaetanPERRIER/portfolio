import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
    state: () => ({
        lang: 'fr',
        webSiteContent: [],
        partActiveId: 0,
        arrowsPosition: {
            top : false,
            right : true,
            bottom : true,
            left : false
        },
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

        setArrowPosition(top, right, bottom, left) {
            this.arrowsPosition = {
                top,
                right,
                bottom,
                left
            }
        },

        setIsOnTop(value) {
            this.isOnTop = value;
        },

    }
});