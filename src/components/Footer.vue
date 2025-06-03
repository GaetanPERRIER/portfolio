<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-links">
                <a v-for="(link, index) in links" :key="index" :href="link.url" target="_blank" rel="noopener noreferrer">
                    <i :class="link.icon"></i>
                </a>
            </div>

            <div class="footer-credit">
                <p>Conçu et développé par Gaëtan Perrier</p>
            </div>

            <div class="footer-credit">
                <p>06 74 16 62 01 / gaetanperrier8@gmail.com</p>
            </div>

            <div class="footer-cv">
                <a href="/cv_gaetan_perrier.pdf" download="cv_gaetan_perrier.pdf">Télecharger mon CV</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            links: [
                { icon: 'fab fa-github', url: 'https://github.com/GaetanPERRIER' },
                { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/gaëtan-perrier-0446142a6' },
            ]
        }
    }
}
</script>

<style scoped>
.footer {
    background-color: #0a192f;
    padding: 2rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.footer-links {
    display: flex;
    gap: 1.5rem;
}

.footer-links a {
    color: #a8b2d1;
    font-size: 1.2rem;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #64ffda;
}

.footer-credit p {
    color: #a8b2d1;
    font-size: 14px;
    text-align: center;
}

.footer-cv {
    color: #64ffda;
    font-size: 12px;
    cursor: pointer;
    text-decoration: underline;
}
</style>