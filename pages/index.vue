<script setup lang="ts">

import { useMainStore} from "~/store";
import { ref } from 'vue'

const store = useMainStore();


onMounted(() => {
    store.getWebSiteContent()
})
</script>

<template>
    <Navbar />
    <NavigationArrow />
    <Banner />
    <section class="about-part-container">

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