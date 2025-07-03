<script setup>
const featuredProjects = [
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
        github: '#',
        demo: '#'
    },
    {
        id: 3,
        title: 'Carte intéractive des parkings vélo de France',
        category: 'Projet scolaire',
        description: 'Application web interactive permettant de localiser les parkings à vélos en France, avec des informations détaillées sur chaque emplacement.',
        technologies: ['Vue.js', 'Strapi'],
        image: '/map.png',
        github: 'https://github.com/GaetanPERRIER/CarteSAE4',
        demo: '#'
    }
]
</script>

<template>
    <section id="projects" class="projects">
        <div class="title-section">
            <div class="title-line"></div>
            <h2><span class="section-number">02.</span> Projets</h2>
        </div>

        <div class="content-projects">
            <div class="intro-text">
                <p>Je te présente mes <strong>projets</strong> les plus significatifs. Chacun représente un <strong>défi technique</strong>  intéressant que j'ai pris plaisir à relever.</p>
                <p>J'ai essayé de varier les technologies pour montrer ma <strong>capacité à m'adapter</strong> à différents besoins.</p>
            </div>

            <div class="cards-projects">
                <div
                    v-for="project in featuredProjects"
                    :key="project.id"
                    class="card"
                >
                    <img :src="project.image" :alt="project.title">
                    <div class="card-content">
                        <h4 class="project-category">{{ project.category }}</h4>
                        <h3 class="project-name">{{ project.title }}</h3>
                        <p class="description">{{ project.description }}</p>

                        <div class="techno-list">
                            <span
                                v-for="(tech, index) in project.technologies"
                                :key="index"
                                class="techno"
                            >
                                {{ tech }}
                            </span>
                        </div>

                        <div class="project-links">
                            <a v-if="project.github !== '#'" :href="project.github" target="_blank" class="repo-links" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                            <a v-if="project.demo !== '#'" :href="project.demo" class="repo-links" rel="noopener noreferrer">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <router-link to="/projects" class="bouton-projets">Plus de projets</router-link>
        </div>
    </section>
</template>

<style scoped>
.projects {
    padding: 50px 0;
    max-width: 1200px;
    margin: 0 auto;
}

.content-projects strong {
    color: #64ffda;
    font-weight: 500;
}

.title-section {
    display: flex;
    align-items: center;
}

.title-section h2 {
    color: #ccd6f6;
    font-size: 26px;
    margin-left: 20px;
    font-weight: 600;
    white-space: nowrap;
}

.section-number {
    color: rgb(100, 255, 218);
    font-weight: bold;
}

.title-line {
    height: 1px;
    background-color: #233554;
    width: 100%;
}

.content-projects {
    margin-top: 10px;
    color: #e6f1ff;
    line-height: 1.6;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.intro-text {
    max-width: 800px;
    text-align: center;
    margin-bottom: 30px;
}

.intro-text p {
    color: #a8b2d1;
    margin-bottom: 15px;
}

.cards-projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    padding: 25px 10px;
    gap: 25px;
    width: 100%;
}

.card {
    border-radius: 10px;
    width: 100%;
    background-color: #112240;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    transition: all 300ms ease;
    overflow: hidden;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: rgba(100, 255, 218, 0.3) 0px 7px 29px 0px;
}

.card:hover img {
    transform: scale(1.05);
}

.card-content {
    width: 100%;
    padding: 20px;
}

.project-name {
    color: rgb(204, 214, 246);
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 15px;
}

.description {
    color: #a8b2d1;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 1.6;
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

.card img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    transition: transform 0.5s ease;
}

.project-category {
    color: #64ffda;
    font-size: 12px;
    opacity: 0.8;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.project-links {
    display: flex;
    gap: 1.5rem;
}

.project-links .repo-links {
    color: #ccd6f6;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

.project-links .repo-links:hover {
    color: #64ffda;
}

.bouton-projets {
    display: inline-block;
    background-color: transparent;
    color: #64ffda;
    border: 1px solid #64ffda;
    font-family: inherit;
    padding: 15px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: rgba(100, 255, 218, 0.1) 0px 7px 29px 0px;
    margin-top: 20px;
}

.bouton-projets:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: rgba(100, 255, 218, 0.2) 0px 7px 29px 0px;
    background-color: rgba(100, 255, 218, 0.1);
}

@media (max-width: 1200px) {
    .projects {
        padding: 30px 10px;
    }
}

@media (max-width: 768px) {
    .cards-projects {
        grid-template-columns: 1fr;
    }

    .intro-text {
        padding: 0 15px;
    }


}
</style>