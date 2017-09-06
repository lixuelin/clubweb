import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Knowledge from '@/views/knowledge'
import Cases from '@/views/cases'
import Books from '@/views/books'
import About from '@/views/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge
    },
    {
      path: '/cases',
      name: 'cases',
      component: Cases
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
