import { createRouter, createWebHistory, type Router } from 'vue-router'

let clientRouter: Router | null = null

if (!import.meta.env.SSR) {
  clientRouter = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/tools/one',
        redirect: '/tools/one/sub1',
        children: [
          {
            path: 'sub1',
            component: () => import('../components/views/1-sub1.vue'),
          },
          {
            path: 'sub2',
            component: () => import('../components/views/1-sub2.vue'),
          },
        ],
      },
      {
        path: '/tools/two',
        redirect: '/tools/two/sub1',
        children: [
          {
            path: 'sub1',
            component: () => import('../components/views/2-sub1.vue'),
          },
          {
            path: 'sub2',
            component: () => import('../components/views/2-sub2.vue'),
          },
        ],
      },
    ],
  })
}

export { clientRouter }
