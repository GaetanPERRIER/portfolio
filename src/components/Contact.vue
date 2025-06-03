<script setup>
const socials = [
    { icon: 'fab fa-github', link: 'https://github.com/GaetanPERRIER' },
    { icon: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/gaëtan-perrier-0446142a6' },
]
</script>

<template>
    <section id="contact" class="contact">
        <div class="title-section">
            <div class="title-line"></div>
            <h2><span class="section-number">04.</span> Contact</h2>
        </div>

        <div class="content-contact">
            <h2>On discute ?</h2>
            <p>Je suis actuellement <strong>à la recherche d'une alternance</strong> pour mon mastère en développement web. Si mon profil t'intéresse ou si tu veux simplement échanger sur un projet, n'hésite pas à me contacter !</p>
            <p>Je suis toujours <strong>ouvert aux nouvelles opportunités</strong> et aux rencontres dans le domaine.</p>
            <a href="mailto:gaetanperrier8@gmail.com" class="contact-btn">Envoyer un message</a>
            <p class="phone-number">Tu peux aussi m'appeler ou m'envoyer un message au <strong>06 74 16 62 01</strong></p>
            <div class="social-links">
                <a v-for="(social, index) in socials" :key="index" :href="social.link" target="_blank" rel="noopener noreferrer">
                    <i :class="social.icon"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact {
    padding: 50px 0;
    max-width: 1000px;
    margin: 0 auto;
}

.title-section {
    display: flex;
    align-items: center;
}

.content-contact strong {
    color: #64ffda;
    font-weight: 500;
}

.title-section h2 {
    color: #ccd6f6;
    font-size: 26px;
    margin-left: 20px;
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

.content-contact {
    margin-top: 10px;
    color: #e6f1ff;
    line-height: 1.6;
    padding: 5px 10px;
    text-align: center;
}

.content-contact h2 {
    color: #ccd6f6;
    font-size: 26px;
    margin-bottom: 25px;
}

.content-contact p {
    color: #a8b2d1;
    font-size: 16px;
    padding: 0 200px;
    margin-bottom: 25px;
}

@media screen and (max-width: 1000px) {
    .content-contact p {
        padding: 0 100px;
    }

    .contact {
        padding: 30px 10px;
    }
}

@media screen and (max-width: 768px) {
    .content-contact p {
        padding: 0 50px;
    }


}

@media screen and (max-width: 500px) {
    .content-contact p {
        padding: 0 10px;
    }
}

.contact-btn {
    display: inline-block;
    color: #64ffda;
    background-color: transparent;
    border: 1px solid #64ffda;
    border-radius: 5px;
    padding: 15px 20px;
    font-size: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: rgba(100, 255, 218, 0.1) 0px 7px 29px 0px;
    margin-bottom: 25px;
}

.contact-btn:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
    box-shadow: rgba(100, 255, 218, 0.2) 0px 7px 29px 0px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 16px;
}

.social-links a {
    color: #ccd6f6;
    font-size: 24px;
    transition: color 0.3s ease, transform 0.3s ease;
}

.social-links a:hover {
    color: #64ffda;
    transform: translateY(-3px);
}

.phone-number {
    color: #64ffda;
    font-size: 14px !important;
}

</style>