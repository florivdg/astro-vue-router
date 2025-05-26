<template>
  <div class="projects-section">
    <h2>🌐 Web Projects</h2>
    <div class="projects-grid">
      <div
        class="project-card"
        v-for="project in webProjects"
        :key="project.id"
      >
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <div class="tech-stack">
          <span v-for="tech in project.tech" :key="tech" class="tech-tag">{{
            tech
          }}</span>
        </div>
        <div class="project-actions">
          <button @click="viewProject(project)" class="view-btn">
            View Project
          </button>
          <button
            @click="toggleLike(project)"
            class="like-btn"
            :class="{ liked: project.liked }"
          >
            {{ project.liked ? '❤️' : '🤍' }} {{ project.likes }}
          </button>
        </div>
        <button
          @click="toggleLike(project)"
          class="like-btn"
          :class="{ liked: project.liked }"
        >
          {{ project.liked ? '❤️' : '🤍' }} {{ project.likes }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const webProjects = ref([
  {
    id: 1,
    name: 'E-commerce Platform',
    description: 'Modern shopping experience with Vue.js and Node.js',
    tech: ['Vue.js', 'Node.js', 'MongoDB'],
    likes: 42,
    liked: false,
  },
  {
    id: 2,
    name: 'Portfolio Website',
    description: 'Responsive portfolio built with Astro and Vue',
    tech: ['Astro', 'Vue.js', 'TypeScript'],
    likes: 28,
    liked: false,
  },
  {
    id: 3,
    name: 'Task Manager',
    description: 'Collaborative project management tool',
    tech: ['React', 'Express', 'PostgreSQL'],
    likes: 35,
    liked: false,
  },
])

const viewProject = (project: any) => {
  alert(`Viewing ${project.name} - This is just a demo!`)
}

const toggleLike = (project: any) => {
  if (project.liked) {
    project.likes--
  } else {
    project.likes++
  }
  project.liked = !project.liked
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
  border-color: #3b82f6;
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
  background: #eff6ff;
  color: #1d4ed8;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
}

.project-actions {
  display: flex;
  gap: 0.5rem;
}

.view-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  flex: 1;
}

.view-btn:hover {
  background: #2563eb;
}

.like-btn {
  background: #f3f4f6;
  color: #374151;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 60px;
}

.like-btn:hover {
  background: #e5e7eb;
}

.like-btn.liked {
  background: #fef2f2;
  color: #dc2626;
}
</style>
