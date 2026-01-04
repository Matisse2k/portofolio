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
            Hey! Ik ben Matisse, op dit moment 2e jaars Software Engineering student.
            Ik vind het leuk om probleemoplossend te denken en mooie functies, applicaties
            en websites te maken. Tot nu toe heb ik vooral aan schoolprojecten gewerkt,
            maar ben nu klaar om meer te doen! Ik ben leergierig en werk graag in teams.
            Inmiddels ben ik al goed gedrilled met Agile werken en het gebruik maken van
            user stories in GitLab. Veel plezier met het bekijken van mijn portfolio!
          </p>
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