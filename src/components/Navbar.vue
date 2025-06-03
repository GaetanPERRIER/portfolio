<script setup>
import {onBeforeUnmount, onMounted, ref, watch} from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isActive = ref(route.path === '/projects');
const menuOpen = ref(false);

watch(() => route.path, (newPath) => {
    isActive.value = newPath === '/projects';
    // Fermer le menu mobile lors du changement de route
    menuOpen.value = false;
});

function toggleMenu() {
    menuOpen.value = !menuOpen.value;
}

// Fermer le menu lorsqu'on clique à l'extérieur
function handleClickOutside(event) {
    const menu = document.querySelector('.mobile-menu');
    const button = document.querySelector('.mobile-menu-btn');
    if (menu && !menu.contains(event.target) && button && !button.contains(event.target)) {
        menuOpen.value = false;
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
    <nav>
        <div class="logo">
            <span class="logo-bracket">&lt;/</span>
            <span class="logo-name">Gaëtan Perrier</span>
            <span class="logo-bracket">&gt;</span>
        </div>

        <div class="links">
            <a class="nav-link" href="/">Accueil</a>
            <a class="nav-link" :href="isActive ? '/#about' : '#about'">À propos</a>
            <a class="nav-link" :href="isActive ? '/#projects' : '#projects'">Projets</a>
            <a class="nav-link" :href="isActive ? '/#skills' : '#skills'">Compétences</a>
            <a class="nav-link" :href="isActive ? '/#contact' : '#contact'">Contact</a>
        </div>

        <div class="mobile-menu" :class="{ active: menuOpen }">
            <a class="nav-link" href="/" @click="menuOpen = false">Accueil</a>
            <a class="nav-link" :href="isActive ? '/#about' : '#about'" @click="menuOpen = false">À propos</a>
            <a class="nav-link" :href="isActive ? '/#projects' : '#projects'" @click="menuOpen = false">Projets</a>
            <a class="nav-link" :href="isActive ? '/#skills' : '#skills'" @click="menuOpen = false">Compétences</a>
            <a class="nav-link" :href="isActive ? '/#contact' : '#contact'" @click="menuOpen = false">Contact</a>
        </div>

        <div class="mobile-menu-btn" @click.stop="toggleMenu">
            <i class="fas fa-bars"></i>
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 25px 5%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    background-color: #0a192f;
    z-index: 100;
}

.mobile-menu-btn {
    display: none;
    font-size: 24px;
    color: #ccd6f6;
    cursor: pointer;
    z-index: 101;
}

.mobile-menu {
    display: none;
    flex-direction: column;
    background-color: #0a192f;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 20px;
    gap: 15px;
    box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu.active {
    display: flex;
}

.links {
    display: flex;
    gap: 25px;
}

.nav-link {
    text-decoration: none;
    color: #ccd6f6;
    font-size: 14px;
    transition: all 0.3s ease;
    position: relative;
    padding: 5px 0;
}

.nav-link:hover {
    color: #64ffda;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #64ffda;
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}

.logo {
    user-select: none;
    font-size: 22px;
    font-weight: 600;
    color: #64ffda;
    cursor: pointer;
    white-space: nowrap;
}

.logo-bracket {
    color: #ccd6f6;
}

.logo-name {
    color: #64ffda;
}

@media screen and (max-width: 1000px) {
    .links {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
    }

    nav {
        padding: 20px 5%;
    }

    .logo {
        font-size: 20px;
    }
}

@media screen and (max-width: 480px) {
    .logo {
        font-size: 18px;
    }
}
</style>