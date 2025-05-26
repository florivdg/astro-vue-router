<template>
  <div class="portfolio-layout">
    <nav class="portfolio-nav" data-allow-mismatch>
      <a href="/" class="back-link">← Back to Home</a>
      <div class="nav-header">
        <h2>📁 Projects</h2>
        <p>Explore my web and mobile work</p>
      </div>
      <div class="nav-links">
        <router-link to="/portfolio/projects/web" class="nav-link">
          🌐 Web Projects
        </router-link>
        <router-link to="/portfolio/projects/mobile" class="nav-link">
          📱 Mobile Apps
        </router-link>
      </div>
    </nav>
    <main class="portfolio-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.portfolio-layout {
  display: flex;
  min-height: 100vh;
}

.portfolio-nav {
  width: 280px;
  background: #f8fafc;
  border-right: 2px solid #e2e8f0;
  padding: 2rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0;
  margin-bottom: 1.5rem;
  color: #64748b;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: #334155;
}

.nav-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.nav-header h2 {
  margin: 0 0 0.5rem 0;
  color: #1e293b;
}

.nav-header p {
  margin: 0;
  color: #64748b;
  font-size: 0.875rem;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.875rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: #475569;
  transition: all 0.2s;
  font-weight: 500;
}

.nav-link:hover {
  background: #e2e8f0;
  color: #334155;
}

.nav-link.router-link-active {
  background: #3b82f6;
  color: white;
}

.portfolio-content {
  flex: 1;
  padding: 2rem;
  background: #ffffff;
}

@media (max-width: 768px) {
  .portfolio-layout {
    flex-direction: column;
  }

  .portfolio-nav {
    width: 100%;
    padding: 1rem;
  }

  .nav-links {
    flex-direction: row;
    overflow-x: auto;
  }

  .nav-link {
    white-space: nowrap;
    min-width: fit-content;
  }
}
</style>
