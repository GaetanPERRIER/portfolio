<script setup lang="js">
import { useMainStore } from "~/store";
import { useRoute} from "vue-router";

const route = useRoute();
const store = useMainStore();

let slug = ref(null);

onMounted(() => {
    slug.value = route.params.slug || null;
})
</script>

<template>
    <div class="project-global-container u-flex u-justify-content-center u-align-items-center">
        <div class="u-flex u-justify-content-center u-align-items-center u-flex-direction-column">
            <h1> Coming soon</h1>
            <NuxtLink to="/">Revenir à l'accueil</NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings/settings.scss';

.project-global-container {
    width: 100%;
    height: 100vh;
    background: url("/static/imgs/banner/banner.jpg") no-repeat;
    background-size: cover;

    a {
        text-decoration: none;
        color: #FFFFFF;
        font-size: 20px;
        font-family: 'Inconsolata', serif;

        &:hover {
            text-decoration: underline;
        }
    }

    h1 {
        color: white;
        text-transform: uppercase;
        text-shadow: 0 0 50px rgba(0, 0, 0, 1);
        font-size: 50px;
        font-family: 'Inconsolata', serif;
        text-align: center;
    }
}
</style>