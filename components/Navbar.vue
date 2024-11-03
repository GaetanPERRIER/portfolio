<script setup lang="js">
import {useMainStore} from "~/store";
import {gsap} from "gsap";

const store = useMainStore();

const isMenuOpen = ref(false);

const lang = computed(() => store.lang);
const navbarContent = computed(() => store.webSiteContent?.find(type => type.type === 'navbar')?.content || []);

function toggleNavbarMenu() {
    const menuContent = document.querySelector('.menu-content');
    const bgMenu = document.querySelector('.bg-menu');
    const menuBurger = document.querySelector('.menu-burger').children;

    menuBurger[1].style.opacity = isMenuOpen.value ? '1' : '0';
    menuBurger[0].style.transform = isMenuOpen.value ? 'rotate(0) translateY(0)' : 'translateY(-10px) rotate(45deg)';
    menuBurger[0].style.width = isMenuOpen.value ? '30px' : '35px';
    menuBurger[2].style.transform = isMenuOpen.value ? 'rotate(0) translateY(0)' : 'translateY(10px) rotate(-45deg)';
    menuBurger[2].style.width = isMenuOpen.value ? '25px' : '35px';

    menuContent.style.opacity = menuContent.style.opacity === '1' ? '0' : '1';
    bgMenu.style.width = bgMenu.style.width === '100%' ? '0' : '100%';
    isMenuOpen.value = !isMenuOpen.value;
}

function ScrollTo(event) {
    const sections = document.querySelectorAll('section');
    const id = Array.from(document.querySelector('.menu-content').children).findIndex(child => child.innerText === event.target.innerText) + 1;

    gsap.to(window, {duration: 1.3, scrollTo: sections[id + 1], ease: "power4.inOut"});
    toggleNavbarMenu();
}
</script>

<template>
    <nav class="w100 h150px u-gap100 u-flex u-justify-content-around u-align-items-center">
        <div class="bg-menu h100"></div>
        <div class="lang u-noselect" @click="store.toggleLang">
            <img class="icon-fr u-noselect" src="/static/imgs/lang-icons/france.png" alt="" :style="{ left: lang === 'fr' ? '0' : '34px', opacity: lang === 'fr' ? 1 : 0 }">
            <img class="icon-en u-noselect" src="/static/imgs/lang-icons/royaume-uni.png" alt="" :style="{ right: lang === 'en' ? '0' : '34px', opacity: lang === 'en' ? 1 : 0 }">
        </div>
        <div class="menu-content w40 u-flex u-align-items-center u-justify-content-center u-gap50">
            <p v-if="isMenuOpen" @click="ScrollTo" v-for="navEl in navbarContent" :key="navEl.name">{{ navEl.name }}</p>
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
        box-shadow: rgba(255, 255, 255, 0.3) 0 7px 29px 0;
        background-color: rgb(0, 0, 0, 0.3);

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
        p {
            color: #FFF;
            font-size: 24px;
            text-decoration: none;
            text-transform: uppercase;
            font-family: 'Inconsolata', serif;
            cursor: pointer;
        }
    }
}
</style>