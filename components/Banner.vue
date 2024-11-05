<script setup lang="js">

import { useMainStore } from "~/store";
const store = useMainStore();



// Computed datas
const bannerContent = computed(() => {
    const content = store.webSiteContent?.find(type => type.type === 'banner');
    return content ? content.content : null;
})

const hobbiesContent = computed(() => {
    const content = store.webSiteContent?.find(type => type.type === 'hobbies');
    return content ? content.content : null;
})

onMounted(() => {

})
</script>

<template>
    <div class="banner-hobbies-container u-flex">
        <section class="banner-container u-noselect u-flex u-flex-direction-column u-justify-content-center u-align-content-center ">
            <h1 class="">{{ bannerContent?.name}}</h1>
            <p class="">{{ bannerContent?.job}}</p>
        </section>
        <section class="hobbies-container u-flex u-flex-direction-column u-align-items-center u-justify-content-center u-gap25">
            <h1 v-if="hobbiesContent && hobbiesContent[0].type === 'title'">{{ hobbiesContent[0].text }}</h1>
            <div v-if="hobbiesContent" class="u-flex u-justify-content-center u-align-items-center u-gap25">
                <div v-for="i in 3" class="hobby">
                    <img src="../static/imgs/content/hobbies/f1.jpg" alt="">
                    <p class="u-mt5" v-html="hobbiesContent[i].name"></p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">

@import '@/assets/styles/settings/settings.scss';

.banner-hobbies-container {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.banner-container {
    position: absolute;
    top: 0;
    background: url('../static/imgs/banner/banner.jpg') no-repeat;
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

.hobbies-container {
    width: 100%;
    height: 100vh;
    background-color: #1c272d;
    opacity: 98%;
    position: absolute;
    left: 100%;
    transition: left 1s $authenticMotion;

    h1 {
        font-size: 40px;
        font-family: 'Inconsolata', serif;
        color: white;
        text-align: center;
        text-transform: uppercase;
        text-shadow: 0 0 50px rgba(0, 0, 0, 1);
    }

    .hobby {
        img {
            width: 400px;
            height: 225px;
            border-radius: 10px;
            object-fit: cover;
        }
        p {
            color: white;
            font-size: 24px;
            font-family: 'Rajdhani', serif;
        }

    }
}
</style>