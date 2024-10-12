<script setup lang="ts">

import { useMainStore} from "~/store";
const store = useMainStore();

store.setActiveComponent(0);
</script>

<template>
    <div class="comming-soon u-flex u-flex-direction-column u-justify-content-center u-align-items-center">
        <h2 class="title-formation share-tech-mono-regular">Comming soon...</h2>
        <NuxtLink to="/">Revenir à l'accueil</NuxtLink>
    </div>
</template>

<style scoped lang="scss">

.comming-soon {
    width: 100%;
    height: 100vh;
}
</style>