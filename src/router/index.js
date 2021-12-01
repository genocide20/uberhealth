import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs'

const routes = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: Tabs,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/Home')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('../views/Profile')
      },
      {
        path: 'exercise',
        name: 'Exercise',
        component: () => import('../views/Exercise')
      },
      {
        path: 'ranking',
        component: () => import('../views/Ranking')
      },
      {
        path: 'health',
        name: 'Health',
        component: () => import('../views/Health')
      },
      {
        path: 'soon',
        name: 'Soon',
        component: () => import('../views/Soon')
      },
    ]
  },
  {
    path: '/profile/personal-info-edit',
    name: 'PersonalInfoForm',
    component: () => import('../views/PersonalInfoForm')
  },
  {
    path: '/profile/groups',
    name: 'GroupList',
    component: () => import('../views/GroupList')
  },
  {
    path: '/milestones',
    name: 'Milestone',
    component: () => import('../views/Milestone')
  },
  {
    path: '/activities/walk-records',
    name: 'WalkRecord',
    component: () => import('../views/activities/WalkRecord')
  },
  {
    path: '/activities/walk-record-form',
    name: 'WalkRecordForm',
    component: () => import('../views/activities/WalkRecordForm')
  },
  {
    path: '/activities/walk-record-detail/:recordId',
    name: 'WalkRecordDetail',
    component: () => import('../views/activities/WalkRecordDetail')
  },
  {
    path: '/activities/jog-records',
    name: 'JogRecord',
    component: () => import('../views/activities/JogRecord')
  },
  {
    path: '/activities/jog-record-detail/:recordId',
    name: 'JogRecordDetail',
    component: () => import('../views/activities/JogRecordDetail')
  },
  {
    path: '/activities/jog-record-form',
    name: 'JogRecordForm',
    component: () => import('../views/activities/JogRecordForm')
  },
  {
    path: '/activities/swim-records',
    name: 'SwimRecord',
    component: () => import('../views/activities/SwimRecord')
  },
  {
    path: '/activities/swim-record-detail/:recordId',
    name: 'SwimRecordDetail',
    component: () => import('../views/activities/SwimRecordDetail')
  },
  {
    path: '/activities/swim-record-form',
    name: 'SwimRecordForm',
    component: () => import('../views/activities/SwimRecordForm')
  },
  {
    path: '/activities/bike-records',
    name: 'BikeRecord',
    component: () => import('../views/activities/BikeRecord')
  },
  {
    path: '/activities/bike-record-detail/:recordId',
    name: 'BikeRecordDetail',
    component: () => import('../views/activities/BikeRecordDetail')
  },
  {
    path: '/activities/bike-record-form',
    name: 'BikeRecordForm',
    component: () => import('../views/activities/BikeRecordForm')
  },
  {
    path: '/activities/dance-records',
    name: 'DanceRecord',
    component: () => import('../views/activities/DanceRecord')
  },
  {
    path: '/activities/dance-record-form',
    name: 'DanceRecordForm',
    component: () => import('../views/activities/DanceRecordForm')
  },
  {
    path: '/activities/dance-record-detail/:recordId',
    name: 'DanceRecordDetail',
    component: () => import('../views/activities/DanceRecordDetail')
  },
  {
    path: '/activities/sport-records',
    name: 'SportRecord',
    component: () => import('../views/activities/SportRecord')
  },
  {
    path: '/activities/sport-record-form',
    name: 'SportRecordForm',
    component: () => import('../views/activities/SportRecordForm')
  },
  {
    path: '/activities/sport-record-detail/:recordId',
    name: 'SportRecordDetail',
    component: () => import('../views/activities/SportRecordDetail')
  },
  {
    path: '/activities/jumprope-records',
    name: 'JumpRopeRecord',
    component: () => import('../views/activities/JumpRopeRecord')
  },
  {
    path: '/activities/jumprope-record-form',
    name: 'JumpRopeRecordForm',
    component: () => import('../views/activities/JumpRopeRecordForm')
  },
  {
    path: '/activities/jumprope-record-detail/:recordId',
    name: 'JumpRopeRecordDetail',
    component: () => import('../views/activities/JumpRopeRecordDetail')
  },
  {
    path: '/activities/hulahoop-records',
    name: 'HulaHoopRecord',
    component: () => import('../views/activities/HulaHoopRecord')
  },
  {
    path: '/activities/hulahoop-record-form',
    name: 'HulaHoopRecordForm',
    component: () => import('../views/activities/HulaHoopRecordForm')
  },
  {
    path: '/activities/hulahoop-record-detail/:recordId',
    name: 'HulaHoopRecordDetail',
    component: () => import('../views/activities/HulaHoopRecordDetail')
  },
  {
    path: '/challenges/:recordId',
    name: 'ChallengeDetail',
    component: () => import('../views/ChallengeDetail')
  },
  {
    path: '/health/drink',
    name: 'Drink',
    component: () => import('../views/health/diet/Drink')
  },
  {
    path: '/physical/weight',
    name: 'weight',
    component: () => import('../views/phyiscal/weight')
  },
  {
    path: '/diet/foodsearch',
    name: 'foodsearch',
    component: () => import('../views/health/diet/FoodSearch')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
