<template>
  <div class="contact-section">
    <div class="contact-header">
      <h2>📬 Get In Touch</h2>
      <p>Let's discuss your next project or just say hello!</p>
    </div>

    <div class="contact-content">
      <div class="contact-info">
        <h3>Contact Information</h3>
        <div class="contact-methods">
          <div
            class="contact-method"
            v-for="method in contactMethods"
            :key="method.type"
          >
            <span class="icon">{{ method.icon }}</span>
            <div class="method-info">
              <strong>{{ method.label }}</strong>
              <p>{{ method.value }}</p>
            </div>
          </div>
        </div>

        <div class="social-links">
          <h4>Find me online</h4>
          <div class="social-grid">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              class="social-link"
              @click.prevent="openSocial(social)"
            >
              <span>{{ social.icon }}</span>
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>

      <div class="contact-form">
        <h3>Send a Message</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <select id="subject" v-model="form.subject" required>
              <option value="">Choose a topic...</option>
              <option value="project">Project Inquiry</option>
              <option value="collaboration">Collaboration</option>
              <option value="question">General Question</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const contactMethods = ref([
  {
    type: 'email',
    icon: '📧',
    label: 'Email',
    value: 'alex@example.com',
  },
  {
    type: 'phone',
    icon: '📞',
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    type: 'location',
    icon: '📍',
    label: 'Location',
    value: 'San Francisco, CA',
  },
])

const socialLinks = ref([
  {
    name: 'GitHub',
    icon: '💻',
    url: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://linkedin.com',
  },
  {
    name: 'Twitter',
    icon: '🐦',
    url: 'https://twitter.com',
  },
  {
    name: 'Portfolio',
    icon: '🌐',
    url: 'https://example.com',
  },
])

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1000))

  alert(
    `Thanks ${form.name}! Your message has been sent (this is just a demo).`,
  )

  // Reset form
  Object.assign(form, {
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  isSubmitting.value = false
}

const openSocial = (social: any) => {
  alert(`Opening ${social.name} - This is just a demo!`)
}
</script>

<style scoped>
.contact-section {
  padding: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-header h2 {
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.contact-header p {
  color: #6b7280;
  font-size: 1.125rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.contact-info h3,
.contact-form h3 {
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.contact-methods {
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  background: #f9fafb;
}

.contact-method .icon {
  font-size: 1.5rem;
}

.method-info strong {
  display: block;
  color: #1f2937;
}

.method-info p {
  margin: 0.25rem 0 0 0;
  color: #6b7280;
}

.social-links h4 {
  color: #374151;
  margin-bottom: 1rem;
}

.social-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  text-decoration: none;
  color: #374151;
  transition: all 0.2s;
}

.social-link:hover {
  border-color: #3b82f6;
  background: #f0f9ff;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #374151;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
}

.submit-btn {
  width: 100%;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.875rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-btn:hover:not(:disabled) {
  background: #2563eb;
}

.submit-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .social-grid {
    grid-template-columns: 1fr;
  }
}
</style>
