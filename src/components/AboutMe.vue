<template>
  <section class="about-me">
    <div class="card">
      <h1>About Me</h1>

      <div class="card-content">
        <div class="profile-section">
          <img src="/assets/PFP.JPG" alt="Matisse Ben Addi" class="profile-pic">
          <div class="info">
            <h2 class="name">Matisse Ben Addi</h2>
            <p class="age">Age: 20</p>
          </div>
        </div>

        <div class="description">
          <p>
            Hey! I'm Matisse Ben Addi, a 2nd year Software Engineering student.</p>
            &nbsp;
          <p> During my studies, I've gained experience with full-stack development: from building responsive interfaces with Vue, TypeScript, and Tailwind, to setting up backends in Java with databases like MySQL, PostgreSQL, and H2. I enjoy problem-solving and love creating functional applications that also look great.</p>
            &nbsp;
            <p>  So far, I've mainly worked on school projects, but each project gives me the opportunity to learn new things and grow as a developer. What really motivates me is that moment when your code finally works and looks exactly how you envisioned it - like recently when I added nested commenting to my forum project and saw how smoothly it worked. That rush gives me the energy to keep going.</p>
            &nbsp;
              <p> I love working in teams and by now I'm well-trained in Agile methodologies and using user stories in GitLab. I'm currently looking for a 20-week internship starting in February, where I can contribute to real projects and further develop my skills.</p>
            &nbsp;
                <p>Enjoy browsing my portfolio!</p>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about-me {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background-color: var(--bg-secondary);
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--accent);
  border-bottom: 2px solid var(--accent);
  padding-bottom: 1rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent);
}

.info {
  flex: 1;
}

.name {
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.age {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.description {
  line-height: 1.8;
}

.description p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

/* Responsive for smaller screens */
@media (max-width: 768px) {
  .card {
    padding: 2rem;
  }

  .profile-section {
    flex-direction: column;
    text-align: center;
  }
}
</style>