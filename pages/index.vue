<script setup lang="js">

import { useMainStore} from "~/store";
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
        <div class="image"></div>
        <div class="u-p20 w40 h50 u-flex u-flex-direction-column u-align-items-center u-justify-content-center u-gap10">
            <h2>{{ aboutContent?.title }}</h2>
            <p>{{ aboutContent?.text }}</p>
        </div>
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

        .image {
            height: 400px;
            width: 400px;
            background-color: #1c272d;
        }

        img {
            border-radius: 15px;
        }
        div {
            border-radius: 15px;

            h2, p {
                color: white;
            }
            h2 {
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
        }
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