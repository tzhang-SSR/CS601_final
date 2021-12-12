import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hobby from '../views/Hobby.vue'
import Contact from '../views/Contact.vue'
import Work from '../views/Works.vue'
import Volunteer from '../views/Volunteer.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hobby',
    name: 'Hobby',
    component: Hobby
  },
  {
    path: '/contact',
    name: 'Contact Me',
    component: Contact
  },
  {
    path: '/work',
    name: 'Work Experience',
    component: Work
  },
  {
    path: '/volunteer',
    name: 'Volunteer Works',
    component: Volunteer
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
