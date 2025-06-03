<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const images = document.querySelectorAll('.carrousel-profil img');
    let currentIndex = 0;

    const changeImage = () => {
        images[currentIndex].classList.remove('img-active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('img-active');
    };

    setInterval(changeImage, 5000);
});
</script>

<template>
    <section id="about" class="about">
        <div class="title-section">
            <h2><span class="section-number">01.</span> À propos</h2>
            <div class="title-line"></div>
        </div>

        <div class="content-about">
            <div class="content-profil">
                <p>Je m'appelle <strong>Gaëtan PERRIER</strong>, j'ai 20 ans et je suis passionné par le développement web. Actuellement en <strong>3ème année de BUT Informatique</strong> à l'IUT d'Amiens, je me spécialise dans les technologies modernes du web.</p>

                <p>Je recherche une <strong>alternance</strong> pour l'année prochaine dans le développement web, dans le cadre d'un mastère. Ce qui m'intéresse particulièrement c'est de travailler sur des projets concrets tout en continuant à progresser techniquement.</p>

                <p>Quand je ne code pas, tu me trouveras probablement en train de :</p>
                <ul class="interests-list">
                    <li><span class="interest-icon">🎮</span> Jouer sur mes jeux favoris (j'ai même participé à quelques tournois)</li>
                    <li><span class="interest-icon">🏸</span> Faire du badminton pour me défouler</li>
                    <li><span class="interest-icon">👨‍💻</span> Explorer de nouvelles technos sur des projets perso</li>
                </ul>

                <p>Je suis toujours partant pour discuter développement, jeux vidéos ou simplement échanger sur des idées de projets !</p>
            </div>

            <div class="carrousel-profil">
                <img class="img-active" src="/profil-1.jpg" alt="Photo de Gaëtan PERRIER">
                <img src="/profil-2.jpg" alt="Gaëtan en compétition gaming">
                <img src="/profil-3.jpg" alt="Gaëtan au badminton">
            </div>
        </div>
    </section>
</template>

<style scoped>
.about {
    padding: 50px 0;
    max-width: 1000px;
    margin: 0 auto;
}

.title-section {
    display: flex;
    align-items: center;
}
.title-section h2 {
    color: #ccd6f6;
    font-size: 26px;
    margin-right: 20px;
    font-weight: 600;
    white-space: nowrap;
}

.section-number {
    color: #64ffda;
    font-weight: bold;
}

.title-line {
    height: 1px;
    background-color: #233554;
    width: 100%;
}

.content-about {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    color: #e6f1ff;
    line-height: 1.6;
    padding: 5px 10px;
}

.content-profil {
    width: 60%;
    padding-right: 20px;
}

.content-profil p {
    margin-bottom: 15px;
    color: #a8b2d1;
}

.content-profil strong {
    color: #64ffda;
    font-weight: 500;
}

.interests-list {
    margin: 20px 0;
    padding-left: 0;
    list-style: none;
}

.interests-list li {
    margin-bottom: 12px;
    position: relative;
    padding-left: 30px;
    color: #a8b2d1;
}

.interest-icon {
    position: absolute;
    left: 0;
    top: 0;
}

.carrousel-profil {
    width: 40%;
    position: relative;
}

.carrousel-profil img {
    width: 90%;
    height: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 10px;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    transition: opacity 1000ms ease;
}

.carrousel-profil img.img-active {
    opacity: 1;
}

@media (max-width: 1000px) {
    .content-about {
        flex-direction: column;
    }

    .carrousel-profil img {
        height: 100%;
        width: auto;
        aspect-ratio: 1/1;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    .about {
        padding: 30px 10px;
    }
}

@media (max-width: 768px) {

    .content-profil,
    .carrousel-profil {
        width: 100%;
    }

    .carrousel-profil {
        height: 300px;
        margin-top: 30px;
    }
}
</style>