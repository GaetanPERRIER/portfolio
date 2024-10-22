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

            <div class="u-flex u-flex-wrap u-align-items-center u-justify-content-center u-gap20 w60">
                <div v-for="i in 4" class="project">
                    <h2 v-if="content && content[i].type ==='project'" v-html="content[i].title"></h2>
                    <p v-if="content && content[i].type ==='project'" v-html="content[i].description"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

h1 {
    text-align: center;
    font-size: 35px;
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
        width: 400px;
        height: 200px;
        background-color: #FFF;
    }
}



</style>