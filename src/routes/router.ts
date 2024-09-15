import { lazy } from 'react'

const Login = lazy(() => import('@/pages/login/index')) //登录
const NotFound = lazy(() => import('@/pages/404/index')) //404页面
const Layout = lazy(() => import('@/pages/layout/index')) //布局
const Knowledge = lazy(() => import('@/pages/knowledge/index')) //知识库
const Robot = lazy(() => import('@/pages/robot/index')) //机器人
const Release = lazy(() => import('@/pages/release/index')) //机器人
const Release2 = lazy(() => import('@/pages/release2/index')) //机器人

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  },
  {
    name: 'home',
    path: '/home',
    component: Layout,
    children: [
      //路由嵌套
      {
        name: 'knowledge',
        path: 'knowledge',
        component: Knowledge
      },
      {
        name: 'robot',
        path: 'robot',
        component: Robot,
        param: {
          name: 'robot'
        }
      },
      {
        name: 'release',
        path: 'release',
        component: Release
      },
      {
        name: 'release2',
        path: 'release2',
        component: Release2
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'notFound',
    path: '*',
    component: NotFound
  }
]

export default routes
