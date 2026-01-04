<script>
</script>

<template>
  <section>
    <h1>About me</h1>

    <div class="profile-container">
      <div class="profile-info">
        <img src="/assets/PFP.JPG" alt="Profile picture" class="profile-pic"/>
        <div class="basic-info">
        <p class="name">Matisse Ben Addi</p>
        <p class="age">Age: 20</p>
        </div>
      </div>


    <div class="description">
      <p>
        Hey! Ik ben Matisse, op dit moment 2e jaars Software Engineering student. Ik vind het leuk
        om probleemoplossend te denken en mooie functies, applicaties en websites te maken. Tot nu
        toe heb ik vooral aan schoolprojecten gewerkt, maar ben nu klaar om meer te doen! Ik ben
        leergierig en werk graag in teams. Inmiddels ben ik al goed gedrilled met Agile werken en
        het gebruik maken van user stories in GitLab. Veel plezier met het bekijken van mijn
        portfolio!
      </p>
    </div>
    </div>
  </section>
</template>

<style scoped>

.about-me {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.profile-container {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.profile-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.basic-info {
  text-align: center;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.age {
  color: #666;
  margin: 0.5rem 0 0 0;
}

.description {
  flex: 1;
  line-height: 1.6;
}

.description p {
  margin: 0;
  font-size: 1.1rem;
}

</style>
