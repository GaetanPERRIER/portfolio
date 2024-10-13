<script setup lang="js">

import { useMainStore} from "~/store";
import { defineProps } from "vue";
import { ref } from 'vue'

const store = useMainStore();



// Computed datas

const aboutContent = computed(() => {
    const content = store.webSiteContent?.find(type => type.type === 'about');
    return content ? content.content : null;
})


// Functions
onMounted(() => {
    store.getWebSiteContent()
})

</script>

<template>
    <Navbar />
    <NavigationArrow />
    <Banner />
    <section class="about-part-container u-flex u-justify-content-center u-align-items-center u-gap35">
        <PartContent type="about" />
    </section>
    <section class="projects-part-container">

    </section>
    <section class="formations-part-container">

    </section>
    <section class="contact-part-container">

    </section>

</template>

<style scoped lang="scss">
    .about-part-container {
        width: 100%;
        height: 100vh;
        background-color: rgb(20, 20, 20);



    }

    .projects-part-container {
        width: 100%;
        height: 100vh;
        background: url("../assets/imgs/banner/banner-4.jpg") no-repeat;
        background-size: cover;
    }

    .formations-part-container {
        width: 100%;
        height: 100vh;
        background-color: rgb(20, 20, 20);
    }

    .contact-part-container {
        width: 100%;
        height: 100vh;
        background: url("../assets/imgs/banner/banner-2.jpg") no-repeat;
        background-size: cover;
    }
</style>