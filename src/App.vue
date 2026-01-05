<template>
  <div id="app">
    <AboutMe />
  </div>

  <div id="app">
    <Projects />
  </div>
</template>

<script setup lang="ts">
import AboutMe from './components/AboutMe.vue'
import Projects from './components/Projects.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}
</style>
