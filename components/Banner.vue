<script setup lang="js">

import { useMainStore } from "~/store";
const store = useMainStore();



// Computed datas
const bannerContent = computed(() => {
    const content = store.webSiteContent?.find(type => type.type === 'banner');
    return content ? content.content : null;
})
</script>

<template>
    <section class="banner-container u-noselect u-flex u-flex-direction-column u-justify-content-center u-align-content-center">
        <h1 class="">{{ bannerContent?.name}}</h1>
        <p class="">{{ bannerContent?.job}}</p>
    </section>
</template>

<style scoped lang="scss">

.banner-container {
    background: url('../assets/imgs/banner/banner.jpg') no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;

    h1, p {
        color: white;
        text-align: center;
        text-transform: uppercase;
        text-shadow: 0 0 50px rgba(0, 0, 0, 1);
    }
    h1 {
        font-size: 125px;
        font-family: 'Inconsolata', serif;
    }
    p {
        font-size: 25px;
        font-family: 'Rajdhani', serif;
    }
}
</style>