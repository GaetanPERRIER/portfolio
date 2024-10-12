<script setup lang="js">

import { useMainStore } from "~/store";
const store = useMainStore();


const isMenuOpen = ref(false);

// Computed datas
const lang = computed(() => store.lang)
const navbarContent = computed(() => {
    const content = store.webSiteContent?.find(type => type.type === 'navbar');
    return content ? content.content : null;
})

// Functions
function toggleNavbarMenu() {
    const menuContent = document.querySelector('.menu-content');
    const bgMenu = document.querySelector('.bg-menu');
    const menuBurger = document.querySelector('.menu-burger');
    const children = menuBurger.children;


    // Manage the burger menu animation
    children[0].style.opacity = isMenuOpen.value ? '1' : '0';
    children[1].style.transform = isMenuOpen.value ? 'rotate(0) translateY(0)' : 'rotate(45deg) translateY(-8px)';
    children[2].style.transform = isMenuOpen.value ? 'rotate(0) translateY(0)' : 'rotate(-45deg) translateY(8px)';
    children[2].style.width = isMenuOpen.value ? '25px' : '35px';

    menuContent.style.opacity = menuContent.style.opacity === '1' ? '0' : '1';
    bgMenu.style.width = bgMenu.style.width === '100%' ? '0' : '100%';
    isMenuOpen.value = !isMenuOpen.value;
}

</script>

<template>
    <nav class="w100 h150px u-gap100 u-flex u-justify-content-around u-align-items-center">
        <div class="bg-menu h100"></div>
        <div class="lang u-noselect" @click="store.toggleLang">
            <img class="icon-fr u-noselect" src="~/assets/imgs/lang-icons/france.png" alt="" :style="{ left: lang === 'fr' ? '0' : '34px', opacity: lang === 'fr' ? 1 : 0 }">
            <img class="icon-en u-noselect" src="~/assets/imgs/lang-icons/royaume-uni.png" alt="" :style="{ right: lang === 'en' ? '0' : '34px', opacity: lang === 'en' ? 1 : 0 }">
        </div>
        <div class="menu-content w40 u-flex u-align-items-center u-justify-content-center u-gap50">
            <NuxtLink :to="navEl.link" v-for="navEl in navbarContent ?? []">{{ navEl.name }}</NuxtLink>
        </div>
        <div class="menu">
            <div class="menu-burger u-flex u-flex-direction-column-reverse u-justify-content-center u-align-content-center" @click="toggleNavbarMenu">
                <div style="width: 30px"></div>
                <div style="width: 35px"></div>
                <div style="width: 25px"></div>
            </div>

        </div>
    </nav>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings/settings.scss';

nav {
    position: fixed;
    top: 0;
    z-index: 1000;

    .bg-menu {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #1c272d;
        opacity: 50%;
        width: 0;
        transition: width 400ms $authenticMotion;
    }

    .lang {
        position: relative;
        cursor: pointer;
        border-radius: 35px;
        height: 30px;
        width: 60px;
        box-shadow: rgba(255, 255, 255, 0.3) 0px 7px 29px 0px;

        img {
            position: absolute;
            height: 100%;
            transition: all 300ms $authenticMotion;
        }
    }

    .menu {
        cursor: pointer;
        color: #FFF;

        .menu-burger {
            transform: scale(-1);
            gap: 7px;
            div {
                height: 3px;
                background-color: #FFF;
                border-radius: 3px;
                transition: all 300ms $authenticMotion;
            }
        }
    }

    .menu-content {
        z-index: 10;
        opacity: 0;
        transition: opacity 400ms $authenticMotion;
    }

    div {
        a {
            color: #FFF;
            font-size: 18px;
            text-decoration: none;
            text-transform: uppercase;

        }
    }
}

</style>