import { lazy } from 'react'

const Login = lazy(() => import('@/pages/login/index')) //登录
const NotFound = lazy(() => import('@/pages/404/index')) //404页面
const Layout = lazy(() => import('@/pages/layout/index')) //布局
const Knowledge = lazy(() => import('@/pages/knowledge/index')) //知识库
const Robot = lazy(() => import('@/pages/robot/index')) //知识库

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
        name: 'chat',
        path: 'chat',
        component: Login
      },
      {
        name: 'setting',
        path: 'setting',
        component: Login
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
