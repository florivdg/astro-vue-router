<template>
  <div class="projects-section">
    <h2>📱 Mobile Projects</h2>
    <div class="projects-grid">
      <div
        class="project-card"
        v-for="project in mobileProjects"
        :key="project.id"
      >
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <div class="tech-stack">
          <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{
            tech
          }}</span>
        </div>
        <div class="project-stats">
          <span class="stat">⭐ {{ project.rating }}</span>
          <span class="stat">📥 {{ project.downloads }}</span>
        </div>
        <button @click="viewProject(project)" class="view-btn">
          View Project
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileProjects = ref([
  {
    id: 1,
    name: 'Fitness Tracker',
    description: 'Native iOS/Android app for workout tracking',
    tech: ['React Native', 'Firebase', 'Redux'],
    rating: '4.8',
    downloads: '50K+',
  },
  {
    id: 2,
    name: 'Weather App',
    description: 'Beautiful weather forecasts with animations',
    tech: ['Flutter', 'Dart', 'OpenWeather API'],
    rating: '4.6',
    downloads: '100K+',
  },
  {
    id: 3,
    name: 'Recipe Finder',
    description: 'Discover recipes based on ingredients you have',
    tech: ['Swift', 'Core Data', 'UIKit'],
    rating: '4.9',
    downloads: '25K+',
  },
])

const viewProject = (project: any) => {
  alert(`Viewing ${project.name} - This is just a demo!`)
}
</script>

<style scoped>
.projects-section {
  padding: 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.project-card {
  padding: 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: white;
  transition: transform 0.2s;
}

.project-card:hover {
  transform: translateY(-2px);
  border-color: #10b981;
}

.project-card h3 {
  margin: 0 0 0.5rem 0;
  color: #1f2937;
}

.project-card p {
  color: #6b7280;
  margin-bottom: 1rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: #ecfdf5;
  color: #047857;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
}

.project-stats {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.stat {
  font-size: 0.875rem;
  color: #6b7280;
}

.view-btn {
  background: #10b981;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

.view-btn:hover {
  background: #059669;
}
</style>
