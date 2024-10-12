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
    <Banner />

</template>

<style scoped lang="scss">

</style>