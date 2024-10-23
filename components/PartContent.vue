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

function MoveProjects(){
    const projects = document.querySelectorAll('.project');

}

onMounted(() => {
    MoveProjects();


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

            <div class="u-flex u-align-items-center u-justify-content-center w80 u-flex-wrap u-gap25">
                <div v-for="i in 4" class="project u-p20">
                    <h2 v-if="content && content[i].type ==='project'" v-html="content[i].title" class="t-color-white u-mb10"></h2>
                    <div class="u-flex w100 u-gap10 u-justify-content-center u-align-items-center">
                        <p v-if="content && content[i].type ==='project'" v-html="content[i].description" class="t-color-white w60"></p>
                        <div class="w40 u-flex u-justify-content-center u-align-items-center">
                            <img class="img-projet" src="" alt="">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

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
        box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
        background-color: rgba(20, 20, 20, 0.9);

        h2 {
            text-align: center;
            font-size: 25px;
            font-family: 'Inconsolata', serif;
            text-transform: uppercase;
        }

        p {
            text-align: center;
            font-size: 16px;
            letter-spacing: 2px;
            font-family: 'Poppins', serif;
            font-weight: 100;
        }

        img {
            width: 100px;
            height: 100px;
            background-color: #FFFFFF;
        }


    }
}



</style>