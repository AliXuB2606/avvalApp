
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/ourview', component: () => import('pages/Ourwiew.vue') },
      { path: '/about', component: () => import('pages/AboutUs.vue') },
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/abouts', component: () => import('pages/About.vue') },
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
