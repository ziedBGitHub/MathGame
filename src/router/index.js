import Vue from 'vue'
import Router from 'vue-router'
import MathGame from '@/components/MathGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MathGame',
      component: MathGame
    }
  ]
})
