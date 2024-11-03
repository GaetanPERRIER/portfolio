<script setup lang="js">
import {useMainStore} from "~/store/index.js";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin)

const store = useMainStore();

const arrowPosition = computed(() => store.arrowsPosition);

const isAtTop = ref(true);
const isAtBottom = ref(false);


function checkScrollPosition() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    isAtTop.value = scrollTop === 0;
    isAtBottom.value = scrollTop + windowHeight >= documentHeight;
}

function ScrollToNextSection() {
    const sections = Array.from(document.querySelectorAll('section'));
    const nextSection = sections.find(section => section.offsetTop > window.scrollY + 1);
    gsap.to(window, { duration: 1.3, scrollTo: nextSection, ease: "power3.inOut" });
}

function ScrollToPreviousSection() {
    const sections = Array.from(document.querySelectorAll('section')).reverse();
    const previousSection = sections.find(section => section.offsetTop < window.scrollY - 1);
    gsap.to(window, { duration: 1.3, scrollTo: previousSection, ease: "power3.inOut" });
}

function ScrollRight() {
    const test = document.querySelector(".hobbies-container");
    test.style.left = "0";
    store.setArrowPosition(false, false, true, true);
}

function ScrollLeft() {
    const test = document.querySelector(".hobbies-container");
    test.style.left = "100%";
    store.setArrowPosition(false, true, true, false);
}

onMounted(() => {
    window.addEventListener('scroll', () => {
        checkScrollPosition();
        const value = window.scrollY;
        const parallaxElements = document.querySelectorAll('.parallax');
        const banner = document.querySelector('.banner-container');

        parallaxElements[0].style.top = `${value * 0.5 - window.innerHeight}px`;
        parallaxElements[1].style.top = `${value * 0.5 - window.innerHeight * 2}px`;
        banner.style.top = `${value * 0.5}px`;
    });
})
</script>

<template>
    <div class="nav-arrow-container">
        <div v-if="!isAtTop" class="w40px h40px arrow u-flex u-align-items-center u-justify-content-center" @click="ScrollToPreviousSection" style="left: 50%; top: 10%; transform: translate(-50%, 0) rotateZ(180deg);">
            <div style="transform: rotate(45deg) translateX(4px)"></div>
            <div style="transform: rotate(-45deg) translateX(-4px)"></div>
        </div>

        <div v-if="isAtTop && arrowPosition.right" class="w40px h40px arrow u-flex u-align-items-center u-justify-content-center" @click="ScrollRight" style="right: 10%; bottom: 50%; transform: translate(0, 50%) rotateZ(-90deg);">
            <div style="transform: rotate(45deg) translateX(4px)"></div>
            <div style="transform: rotate(-45deg) translateX(-4px)"></div>
        </div>

        <div v-if="!isAtBottom" class="w40px h40px arrow u-flex u-align-items-center u-justify-content-center" @click="ScrollToNextSection" style="left: 50%; bottom: 10%; transform: translate(-50%, 0);">
            <div style="transform: rotate(45deg) translateX(4px)"></div>
            <div style="transform: rotate(-45deg) translateX(-4px)"></div>
        </div>

        <div v-if="isAtTop && arrowPosition.left" class="w40px h40px arrow u-flex u-align-items-center u-justify-content-center" @click="ScrollLeft" style="left: 10%; bottom: 50%; transform: translate(0, 50%) rotateZ(90deg);">
            <div style="transform: rotate(45deg) translateX(4px)"></div>
            <div style="transform: rotate(-45deg) translateX(-4px)"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings/settings.scss';

.nav-arrow-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    
    .arrow {
        cursor: pointer;
        z-index: 1001;
        position: fixed;
        border-radius: 100%;
        transition: all 400ms $authenticMotion;
        border: 1px solid #FFF;

        div {
            width: 15px;
            height: 2px;
            background-color: #FFFFFF;
            border-radius: 5px;
        }
    }

    .arrow:hover {
        background-color: rgba(18, 26, 8, 0.9);
        border: 1px rgba(18, 26, 8, 0.9) solid;
    }
}
</style>