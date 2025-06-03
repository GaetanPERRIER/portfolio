import { createRouter, createWebHistory } from 'vue-router';
import App from "@/App.vue";
import AllProjects from "@/pages/allProjects.vue";
import Home from "@/pages/home.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: AllProjects, props: true },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;