import { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import './index.scss'
import kdbot from '@/assets/images/kcbot.png'
import knowledge from '@/assets/images/knowledge.png'
import knowledgeAct from '@/assets/images/knowledgeAct.png'
import robot from '@/assets/images/robot.png'
import robotAct from '@/assets/images/robotAct.png'
import chat from '@/assets/images/chat.png'
import chatAct from '@/assets/images/chatAct.png'
import setting from '@/assets/images/setting.png'
import settingAct from '@/assets/images/settingAct.png'

interface MenuList {
  id: string
  name: string
  class: string
  img: string
}
const IconList = {
  knowledge: {
    a: knowledgeAct,
    d: knowledge
  },
  robot: {
    a: robotAct,
    d: robot
  },
  chat: {
    a: chatAct,
    d: chat
  },
  setting: {
    a: settingAct,
    d: setting
  }
}

const Layout = () => {
  const navigate = useNavigate()
  const route = useLocation()
  const [menus, setMenu] = useState<MenuList[]>([])
  const changeMenu = (item: MenuList) => {
    setMenu((menus) => {
      menus.map((items) => {
        if (items.id === item.id) {
          items.class = 'actived'
          items.img = IconList[item.id]['a']
        } else {
          items.class = 'deactive'
          items.img = IconList[items.id]['d']
        }
      })
      return menus
    })
    navigate(`/home/${item.id}`)
  }
  useEffect(() => {
    // 配置不同权限展示不同menu
    const arr: MenuList[] = [
      {
        id: 'knowledge',
        name: 'C端知识库',
        class: route.pathname.includes('knowledge') ? 'actived' : 'deactive',
        img: knowledgeAct
      },
      {
        id: 'robot',
        name: '机器人管理',
        class: route.pathname.includes('robot') ? 'actived' : 'deactive',
        img: robot
      },
      {
        id: 'chat',
        name: '对话查询',
        class: route.pathname.includes('chat') ? 'actived' : 'deactive',
        img: chat
      },
      {
        id: 'setting',
        name: '设置',
        class: route.pathname.includes('setting') ? 'actived' : 'deactive',
        img: setting
      }
    ]
    setMenu(arr)
  }, [])
  return (
    <div className="main">
      <div className="navigation">
        <div className="titleIcon">
          <p>
            <img src={kdbot} />
          </p>
          <p>KC-BOT</p>
        </div>
        <ul className="menuList">
          {menus.map((item) => (
            <li className={item.class} key={item.id} onClick={() => changeMenu(item)}>
              <p>
                <img src={item.img} />
              </p>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <div className="header"></div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
