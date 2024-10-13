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

</script>

<template>
    <div>
        <div v-for="el in content">

            <div v-if="el.type === 'title'">
                <h1 class="t-color-white t-uppercase">{{ el.text }}</h1>
            </div>

            <img v-if="el.type === 'image'" :src="`../${el.src}`" alt="" class="h50" />

            <div v-if="el.type === 'text'">
                <p class="t-color-white">{{ el.text }}</p>
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


p {
    text-align: center;
    line-height: 30px;
    font-size: 22px;
    letter-spacing: 2px;
    font-family: 'Poppins', serif;
    font-weight: 100;
}
</style>