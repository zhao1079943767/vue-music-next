import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "",
    redirect: "/recommend"
  },
  {
    path: "/recommend",
    component: () => import("@/view/recommend.vue")
  }, {
    path: "/singer",
    component: () => import("@/view/singer.vue")
  }, {
    path: "/top-list",
    component: () => import("@/view/top-list.vue")
  }, {
    path: "/search",
    component: () => import("@/view/search.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
