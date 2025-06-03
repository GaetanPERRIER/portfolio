<script setup>
const skills = [
    { name: 'HTML/CSS', level: 90, icon: 'fab fa-html5' },
    { name: 'JavaScript', level: 80, icon: 'fab fa-js' },
    { name: 'Vue.js/Nuxt.js', level: 80, icon: 'fab fa-vuejs' },
    { name: 'React.js', level: 50, icon: 'fab fa-react' },
    { name: 'Angular', level: 30, icon: 'fab fa-angular' },
    { name: 'SASS', level: 90, icon: 'fab fa-sass' },
    { name: 'PHP', level: 50, icon: 'fab fa-php' },
    { name: 'Node.js', level: 70, icon: 'fab fa-node-js' },
    { name: 'SQL', level: 85, icon: 'fas fa-database' },
];

const categories = [
    {
        name: 'Frontend',
        skills: ['JavaScript', 'Vue.js', 'HTML/CSS/SCSS', 'React.js', 'Angular']
    },
    {
        name: 'Backend',
        skills: ['Node.js', 'Python', 'SQL', 'PHP', 'Express.js']
    },
    {
        name: 'Outils',
        skills: ['Git', 'Docker', 'Photoshop', 'Figma', 'Notion']
    }
];
</script>

<template>
    <section id="skills" class="skills">
        <div class="title-section">
            <h2><span class="section-number">03.</span> Compétences</h2>
            <div class="title-line"></div>
        </div>

        <div class="content-skills">
            <p>Voici les technologies avec lesquelles je travaille au quotidien. Je suis toujours en train <strong>d'apprendre et d'améliorer mes compétences.</strong></p>
            <p>Je vise à <strong>diversifier mes compétences</strong> afin de pouvoir m'adapter au mieux aux situations auquelles je suis confronté.</p>

            <div class="skills-container">
                <div class="skills-chart">
                    <div v-for="(skill, index) in skills" :key="index" class="skill-item">
                        <div class="skill-header">
                            <i :class="skill.icon"></i>
                            <span>{{ skill.name }}</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-level" :style="{ width: skill.level + '%' }"></div>
                        </div>
                        <span class="skill-percentage">{{ skill.level }}%</span>
                    </div>
                </div>

                <div class="skills-categories">
                    <div v-for="(category, index) in categories" :key="index" class="category-card">
                        <h3>{{ category.name }}</h3>
                        <ul>
                            <li v-for="(skill, skillIndex) in category.skills" :key="skillIndex">{{ skill }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.content-skills strong {
    color: #64ffda;
    font-weight: 500;
}

.skills {
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

.content-skills {
    margin-top: 10px;
    color: #e6f1ff;
    line-height: 1.6;
    padding: 5px 10px;
}

.content-skills p {
    margin-bottom: 25px;
    color: #a8b2d1;
}

.skills-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.skills-chart {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.skill-item {
    margin-bottom: 20px;
}

.skill-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    color: #ccd6f6;
}

.skill-header i {
    color: #64ffda;
    font-size: 18px;
}

.skill-bar {
    height: 8px;
    background-color: #112240;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 5px;
}

.skill-level {
    height: 100%;
    background-color: #64ffda;
    border-radius: 4px;
    transition: width 1s ease-in-out;
}

.skill-percentage {
    color: #a8b2d1;
    font-size: 14px;
}

.skills-categories {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.category-card {
    background-color: #112240;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    border: 1px solid rgba(100, 255, 218, 0.1);
}

.category-card h3 {
    color: #64ffda;
    margin-bottom: 15px;
    font-size: 18px;
}

.category-card ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.category-card li {
    color: #a8b2d1;
    margin-bottom: 8px;
    position: relative;
    padding-left: 20px;
}

.category-card li::before {
    content: '▹';
    color: #64ffda;
    position: absolute;
    left: 0;
}

@media (max-width: 1024px) {
    .skills {
        padding: 30px 10px;
    }
}

@media (max-width: 768px) {
    .skills-chart {
        grid-template-columns: 1fr;
    }

    .skills-categories {
        grid-template-columns: 1fr;
    }

}
</style>
