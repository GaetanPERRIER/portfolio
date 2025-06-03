<template>
    <div class="portfolio-app">

        <Navbar />
        <main>
            <router-view /> <!-- Ici s'afficheront les pages -->
        </main>

        <Footer />

    </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>