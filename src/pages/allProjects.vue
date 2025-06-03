<script setup>
import { ref } from 'vue'

const projects = ref([
    {
        id: 1,
        title: 'Site de blindtest multijoueur',
        category: 'Projet personel (en cours)',
        description: 'Plateforme interactive permettant à plusieurs utilisateurs de participer à des blindtests musicaux en temps réel avec système de scores et classements.',
        technologies: ['Nuxt.js', 'Express.js', 'Socket.io'],
        image: '/blindtest-website.png',
        github: 'https://github.com/GaetanPERRIER/website-quiz',
        demo: '#'
    },
    {
        id: 2,
        title: 'Jeu de loups-garou contre des bots',
        category: 'Projet scolaire (non terminé)',
        description: 'Jeu de société solo où le joueur affronte des bots dans une partie de loups-garou tour par tour, avec une interface utilisateur, différents chats et la gestion des rôles.',
        technologies: ['React.js', 'Node.js'],
        image: '/loupgarou-game.png',
        github: 'https://github.com/GaetanPERRIER',
        demo: '#'
    },
    {
        id: 3,
        title: 'Carte intéractive des parkings vélo de France',
        category: 'Projet scolaire',
        description: 'Application web interactive permettant de localiser les parkings à vélos en France, avec des informations détaillées sur chaque emplacement.',
        technologies: ['Vue.js', 'Strapi'],
        image: '/interactive-map.jpg',
        github: 'https://github.com/GaetanPERRIER/CarteSAE4',
        demo: '#'
    },
    {
        id: 4,
        title: 'Carte intéractive stratégique pour Valorant',
        category: 'Projet personel (non terminé/en cours)',
        description: 'Application web interactive (style Valoplant) pour les joueurs de Valorant, permettant de visualiser les cartes, créer des stratégies et les partager',
        technologies: ['Nuxt.js'],
        image: '/playbook-valo.png',
        github: 'https://github.com/GaetanPERRIER/valorant-playbook',
        demo: '#'
    },
    {
        id: 6,
        title: 'Jeu de puissance 4 contre une IA',
        category: 'Projet scolaire',
        description: 'Jeu de puissance 4 où le joueur affronte une IA, avec une interface utilisateur simple et l\'utilisation de l\'algorithme Minimax pour la prise de décision de l\'IA.',
        technologies: ['C#', 'Windows Forms'],
        image: '/p4-game.png',
        github: 'https://github.com/GaetanPERRIER',
        demo: '#'
    },
    {
        id: 7,
        title: 'Jeu de 2048',
        category: 'Projet scolaire',
        description: 'Jeu de 2048 développé avec une interface utilisateur simple, permettant au joueur de fusionner des tuiles pour atteindre le score de 2048. L\'objectif était de se concentrer sur la qualité du code.',
        technologies: ['Vue.js'],
        image: '/2048-game.jpg',
        github: 'https://github.com/GaetanPERRIER',
        demo: '#'
    },
    {
        id: 5,
        title: 'Site vitrine fictif pour le Cercles des Informaticiens Dispersés',
        category: 'Projet scolaire',
        description: 'Site vitrine fictif pour le Cercles des Informaticiens Dispersés, présentant les membres et les projets du cercle. Système de gestion des membres et mini réseau social.',
        technologies: ['Nuxt.js', 'Django'],
        image: '/cid-site.png',
        github: 'https://github.com/GaetanPERRIER/cid-site',
        demo: '#'
    },
])

const visibleProjects = ref(6)
const loadMore = () => {
    visibleProjects.value += 3
}
</script>

<template>
    <section id="all-projects" class="all-projects">
        <div class="title-section">
            <div class="title-line"></div>
            <div class="logo">
                <span class="logo-bracket">&lt;/</span>
                <span class="logo-name"> Tous mes projets </span>
                <span class="logo-bracket">&gt;</span>
            </div>
            <div class="title-line"></div>

        </div>

        <div class="content-projects">
            <div class="intro-text">
                <p>Découvre mes différents projets. Chacun a son histoire et m'a apporté des défis techniques intéressants.</p>
                <p>Entre interfaces utilisateur et logique backend, j'aime construire des applications complètes qui tiennent la route.</p>
            </div>

            <div class="cards-projects">
                <div
                    v-for="project in projects.slice(0, visibleProjects)"
                    :key="project.id"
                    class="card"
                >
                    <img :src="project.image" :alt="project.title">
                    <div class="card-content">
                        <h4 class="project-category">{{ project.category || 'Projet' }}</h4>
                        <h3 class="project-name">{{ project.title }}</h3>
                        <p class="description">{{ project.description }}</p>
                        <div class="techno-list">
              <span v-for="(tech, index) in project.technologies" :key="index" class="techno">
                {{ tech }}
              </span>
                        </div>
                        <div class="project-links">
                            <div class="repo-links" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                            </div>
                            <div class="repo-links" rel="noopener noreferrer">
                                <i class="fas fa-external-link-alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                v-if="visibleProjects < projects.length"
                @click="loadMore"
                class="bouton-projets"
            >
                Charger plus de projets
            </button>
        </div>
    </section>
</template>

<style scoped>
.logo {
    white-space: nowrap;
    user-select: none;
    font-size: 26px;
    font-weight: 600;
    color: #64ffda;
    margin: 0 35px;
}

.logo-bracket {
    color: #ccd6f6;
}

.logo-name {
    color: #64ffda;

}

.all-projects {
    padding: 80px 20px;
    max-width: 1400px;
    margin: 0 auto;
}

.title-section {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}

.title-section h2 {
    color: #64ffda;
    font-size: 28px;
    margin-left: 20px;
    font-weight: 600;
    white-space: nowrap;
}


.title-line {
    height: 1px;
    background-color: #233554;
    width: 100%;
}

.content-projects {
    margin-top: 30px;
    color: #e6f1ff;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
}

.intro-text {
    max-width: 800px;
    margin: 0 auto 40px;
    text-align: center;
}

.intro-text p {
    color: #a8b2d1;
    margin-bottom: 15px;
    font-size: 16px;
}

.cards-projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
    cursor: pointer;
}

.card {
    border-radius: 10px;
    background-color: #112240;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    transition: all 0.3s ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card:hover {
    transform: translateY(-7px);
    box-shadow: 0 20px 30px -15px rgba(100, 255, 218, 0.3);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.card:hover img {
    transform: scale(1.05);
}

.card-content {
    padding: 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.project-category {
    color: #64ffda;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.project-name {
    color: #ccd6f6;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
}

.description {
    color: #a8b2d1;
    margin-bottom: 20px;
    font-size: 15px;
    line-height: 1.6;
    flex-grow: 1;
}

.techno-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.techno {
    color: #64ffda;
    font-size: 12px;
    font-family: 'Fira Code', monospace;
    background: rgba(100, 255, 218, 0.1);
    padding: 5px 10px;
    border-radius: 3px;
}

.project-links {
    display: flex;
    gap: 20px;
}

.project-links .repo-links {
    color: #ccd6f6;
    font-size: 18px;
    transition: color 0.3s ease;
}

.project-links .repo-links:hover {
    color: #64ffda;
}

.bouton-projets {
    display: block;
    background-color: transparent;
    color: #64ffda;
    font-family: inherit;
    border: 1px solid #64ffda;
    padding: 15px 30px;
    border-radius: 5px;
    font-size: 16px;
    transition: all 0.3s ease;
    cursor: pointer;
    margin: 40px auto 0;
    max-width: 250px;
    text-align: center;
}

.bouton-projets:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -10px rgba(100, 255, 218, 0.3);
}

@media (max-width: 768px) {
    .all-projects {
        padding: 60px 15px;
    }

    .title-section h2 {
        font-size: 24px;
    }

    .cards-projects {
        grid-template-columns: 1fr;
    }

    .logo {
        font-size: 22px;
        margin: 0;
    }
}
</style>