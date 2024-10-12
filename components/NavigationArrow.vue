<script setup lang="js">
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin)

function ScrollTo() {
    const sections = document.querySelectorAll('section');

    const sectionOffsets = []
    sections.forEach(section => {
        sectionOffsets.push(section.offsetTop);
    });
    const scrollY = window.scrollY +1;
    const nextSection = sectionOffsets.find(offset => offset > scrollY);

    gsap.to(window, {duration: 1.5, scrollTo: nextSection, ease: "power4.inOut"});

}

</script>

<template>
    <div class="nav-arrow-container">
        <div class="w40px h40px arrow u-flex u-align-items-center u-justify-content-center" @click="ScrollTo">
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
        z-index: 100;
        position: fixed;
        left: 50%;
        bottom: 10%;
        border-radius: 100%;
        transform: translate(-50%, 0);
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