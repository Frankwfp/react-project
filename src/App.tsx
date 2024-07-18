import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import router from '@/routes/router'
import './App.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primeicons/primeicons.css'

interface Routes {
  name: string
  path: string
  component: React.ComponentType
  children?: Routes[]
}

function App() {
  // 由于路由组件是懒加载的，渲染页面可能会有延迟，使用Suspense 可优化交互
  const routeComponent = (route: Routes): React.ReactNode => {
    if (!route.component) {
      return null
    }
    return (
      <Suspense fallback={<div> Loading...</div>}>
        <route.component />
      </Suspense>
    )
  }
  // 通过每个路由对象渲染Route
  const routeItem = (route: Routes) => {
    return (
      <Route key={route.name} element={routeComponent(route)} path={route.path}>
        {routeList(route.children ?? [])}
      </Route>
    )
  }
  // 根据配置的router.ts 生成Route
  const routeList = (list: Routes[]) => {
    return list.map((item) => routeItem(item))
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route element={Dashboard()} path="/">
            <Route element={MenuLeft()} path="menu"></Route>
          </Route>
          <Route element={Profile()} path="/profile"></Route> */}
          {routeList(router)}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
