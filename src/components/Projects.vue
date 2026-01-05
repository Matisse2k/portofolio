<template>
  <section class="projects">
    <h1>My Projects</h1>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.name" class="project-card">
        <div class="project-header">
          <h2>{{ project.name }}</h2>
          <div class="project-links">
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="link-btn live">
              Live Demo
            </a>
            <a :href="project.githubUrl" target="_blank" class="link-btn github">
              GitHub
            </a>
          </div>
        </div>

        <p class="description">{{ project.description }}</p>

        <div v-if="project.note" class="project-note">
          {{ project.note }}
        </div>

        <div class="contribution">
          <h3>My Contribution:</h3>
          <ul>
            <li v-for="(item, index) in project.contribution" :key="index">{{ item }}</li>
          </ul>
        </div>

        <div class="tech-stack">
          <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    name: "Election Site",
    description: "A political forum and election data platform that displays real Dutch government election data (2021-2025) with interactive discussions and nested commenting functionality.",
    contribution: [
      "Processed raw government XML data into a structured database",
      "Created nested reply system with edit/delete functionality",
      "Built dynamic year selector component used across multiple pages"
    ],
    techStack: ["Java", "TypeScript", "Vue", "H2", "Springboot", "Tailwind", "CSS"],
    githubUrl: "https://github.com/Matisse2k/election-site",
    liveUrl: ""
  },
  {
    name: "The Game",
    description: "A text-based adventure game featuring multiple rooms, interactive items, and character actions, with custom audio controls built using components.",
    contribution: [
      "Created 2 interactive rooms with items, actions, and characters",
      "Built reusable volume bar and mute button components",
      "Implemented local storage for game state persistence"
    ],
    techStack: ["TypeScript", "HTML", "CSS", "LocalStorage"],
    githubUrl: "https://github.com/Matisse2k/the-game-1st-year-project",
    liveUrl: "https://the-game-1st-year-project-web.vercel.app/",
    note: "⚠️ First load may take 30-40 seconds due to server cold start on free hosting."
  },
  {
    name: "Game Web Shop",
    description: "An e-commerce platform for indie games with shopping cart functionality, wishlists, user libraries, and third-party discount code validation via API integration.",
    contribution: [
      "Designed and implemented game details pages UI",
      "Built complete shopping cart with database persistence",
      "Integrated third-party API for discount code validation"
    ],
    techStack: ["TypeScript", "CSS", "HTML", "MVC", "MySQL"],
    githubUrl: "https://github.com/Matisse2k/the-game-shop",
    liveUrl: ""
  }
];
</script>

<style scoped>
.projects {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--accent);
  border-bottom: 2px solid var(--accent);
  padding-bottom: 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--bg-secondary);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 255, 136, 0.2);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

h2 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0;
}

.project-links {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.link-btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.link-btn.live {
  background-color: var(--accent);
  color: var(--bg-primary);
}

.link-btn.live:hover {
  background-color: #00cc6a;
  transform: scale(1.05);
}

.link-btn.github {
  background-color: transparent;
  color: var(--accent);
  border: 2px solid var(--accent);
}

.link-btn.github:hover {
  background-color: var(--accent);
  color: var(--bg-primary);
}

.description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.project-note {
  background-color: rgba(255, 193, 7, 0.1);
  border-left: 3px solid #ffc107;
  padding: 0.75rem 1rem;
  color: #ffc107;
  font-size: 0.9rem;
  border-radius: 4px;
}

.contribution {
  border-left: 3px solid var(--accent);
  padding-left: 1rem;
}

.contribution h3 {
  font-size: 1rem;
  color: var(--accent);
  margin: 0 0 0.75rem 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contribution ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contribution li {
  color: var(--text-secondary);
  padding-left: 1.5rem;
  position: relative;
}

.contribution li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.tech-tag {
  padding: 0.4rem 0.8rem;
  background-color: rgba(0, 255, 136, 0.1);
  border: 1px solid var(--accent);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 600;
}

@media (max-width: 768px) {
  .projects {
    padding: 2rem 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-header {
    flex-direction: column;
  }

  .project-links {
    width: 100%;
  }

  .link-btn {
    flex: 1;
    text-align: center;
  }
}
</style>