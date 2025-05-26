<template>
  <div class="bio-section">
    <div class="profile-header">
      <div class="avatar">👨‍💻</div>
      <div class="profile-info">
        <h2>Alex Johnson</h2>
        <p class="title">Full-Stack Developer</p>
        <p class="location">📍 San Francisco, CA</p>
      </div>
    </div>

    <div class="bio-content">
      <section class="about">
        <h3>About Me</h3>
        <p>
          Passionate developer with {{ yearsExperience }} years of experience
          building web and mobile applications. I love creating user-friendly
          interfaces and solving complex problems with clean, efficient code.
        </p>
      </section>

      <section class="skills">
        <h3>Skills & Technologies</h3>
        <div class="skills-grid">
          <div
            v-for="category in skills"
            :key="category.name"
            class="skill-category"
          >
            <h4>{{ category.name }}</h4>
            <div class="skill-tags">
              <span
                v-for="skill in category.items"
                :key="skill"
                class="skill-tag"
                >{{ skill }}</span
              >
            </div>
          </div>
        </div>
      </section>

      <section class="experience">
        <h3>Experience Highlights</h3>
        <div class="timeline">
          <div
            v-for="job in experience"
            :key="job.company"
            class="timeline-item"
          >
            <div class="timeline-content">
              <h4>{{ job.role }}</h4>
              <p class="company">{{ job.company }} • {{ job.period }}</p>
              <p>{{ job.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const startYear = 2018
const yearsExperience = computed(() => new Date().getFullYear() - startYear)

const skills = ref([
  {
    name: 'Frontend',
    items: ['Vue.js', 'React', 'TypeScript', 'Astro', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express'],
  },
  {
    name: 'Mobile',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    name: 'Tools',
    items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code'],
  },
])

const experience = ref([
  {
    role: 'Senior Full-Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description:
      'Leading development of modern web applications using Vue.js and Node.js',
  },
  {
    role: 'Frontend Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description:
      'Built responsive user interfaces and improved application performance by 40%',
  },
  {
    role: 'Junior Developer',
    company: 'WebStudio',
    period: '2018 - 2020',
    description: 'Developed websites and learned modern development practices',
  },
])
</script>

<style scoped>
.bio-section {
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.avatar {
  font-size: 4rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  padding: 1rem;
  backdrop-filter: blur(10px);
}

.profile-info h2 {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
}

.title {
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
  opacity: 0.9;
}

.location {
  margin: 0;
  opacity: 0.8;
}

.bio-content section {
  margin-bottom: 2rem;
}

.bio-content h3 {
  color: #1f2937;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.skill-category h4 {
  margin: 0 0 0.5rem 0;
  color: #374151;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
}

.timeline {
  position: relative;
}

.timeline-item {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1.5rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #3b82f6;
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 1.2rem;
  width: 2px;
  height: calc(100% + 0.5rem);
  background: #e5e7eb;
}

.timeline-item:last-child::after {
  display: none;
}

.timeline-content h4 {
  margin: 0 0 0.25rem 0;
  color: #1f2937;
}

.company {
  color: #6b7280;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.timeline-content p:last-child {
  margin: 0;
  color: #374151;
}
</style>
