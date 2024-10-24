<script setup lang="js">

import { useMainStore } from "~/store";
import {defineProps} from "vue";
const store = useMainStore();

const props = defineProps({
    type: String
})

// Computed datas

const content = computed(() => {
    const content = store.webSiteContent?.find(type => type.type === props.type);
    return content ? content.content : null;
})


onMounted(() => {

})

</script>

<template>
    <div>
        <!-- About content -->
        <div v-if="type === 'about'" class="about-container u-flex u-align-items-center u-justify-content-center u-gap50">
            <img class="photo" src="" alt="">
            <div>
                <h1 v-if="content && content[0].type === 'title'" class="t-color-white u-mb20" v-html="content[0].text"></h1>
                <p v-if="content && content[2].type === 'text'" class="t-color-white" v-html="content[2].text"></p>
            </div>
        </div>

        <!-- Projects content -->
        <div v-if="type === 'projects'" class="project-container u-flex u-flex-direction-column u-align-items-center u-justify-content-center">
            <h1 v-if="content && content[0].type === 'title'" class="t-color-white u-mb20" v-html="content[0].text"></h1>

            <div class="u-flex u-align-items-center u-justify-content-center w70 u-flex-wrap u-gap25">
                <div v-for="i in 4" class="project u-flex u-justify-content-between">
                    <div class="w60 u-p25">
                        <h2 v-if="content && content[i].type === 'project'" class="t-color-white u-mb20" v-html="content[i].title"></h2>
                        <p v-if="content && content[i].type === 'project'" class="t-color-white u-mb10" v-html="content[i].description"></p>
                        <p v-if="content && content[i].type === 'project'" class="t-color-white" v-html="content[i].techno"></p>
                    </div>
                    <div class="img-container w40">
                        <img v-if="content && content[i].type === 'project'" :src="content[i].image" alt="">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings/settings.scss';

h1 {
    text-align: center;
    font-size: 40px;
    font-family: 'Inconsolata', serif;
    text-transform: uppercase;
}

.about-container {

    p {
        text-align: center;
        line-height: 30px;
        font-size: 22px;
        letter-spacing: 2px;
        font-family: 'Poppins', serif;
        font-weight: 100;
        width: 750px;
    }

    .photo {
        width: 400px;
        height: 400px;
        background-color: #405B8F;
        border-radius: 10px;
    }
}

.project-container {
    .project {
        width: 450px;
        height: 190px;
        border-radius: 10px;
        box-shadow: rgba(17, 17, 17, 0.5) 0 7px 29px 0;
        background-color: rgba(20, 20, 20, 0.9);
        overflow: hidden;
        cursor: pointer;
        transition: all 500ms $authenticMotion;

        &:hover {
            box-shadow: rgba(100, 100, 111, 0.8) 0 7px 29px 0;
            transform: scale(1.05);
        }

        .img-container {
            position: relative;
            overflow: hidden;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                clip-path: polygon(21% 0, 100% 0%, 100% 100%, 0 100%);
                background-color: #405B8F;
            }
        }

        h2 {
            text-align: center;
            font-size: 25px;
            font-family: 'Inconsolata', serif;
            text-transform: uppercase;
        }

        p {
            text-align: left;
            font-size: 16px;
            letter-spacing: 2px;
            font-family: 'Poppins', serif;
            font-weight: 100;
            line-height: 18px;
        }
    }
}



</style>