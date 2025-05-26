import { createRouter, createWebHistory, type Router } from 'vue-router'

let clientRouter: Router | null = null

if (!import.meta.env.SSR) {
  clientRouter = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/portfolio/projects',
        redirect: '/portfolio/projects/web',
        children: [
          {
            path: 'web',
            component: () => import('../components/views/ProjectsWeb.vue'),
          },
          {
            path: 'mobile',
            component: () => import('../components/views/ProjectsMobile.vue'),
          },
        ],
      },
      {
        path: '/portfolio/about',
        redirect: '/portfolio/about/bio',
        children: [
          {
            path: 'bio',
            component: () => import('../components/views/AboutBio.vue'),
          },
          {
            path: 'contact',
            component: () => import('../components/views/AboutContact.vue'),
          },
        ],
      },
    ],
  })
}

export { clientRouter }
