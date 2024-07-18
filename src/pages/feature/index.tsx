import { useState, useEffect } from 'react'
import { ScrollPanel } from 'primereact/scrollpanel'
import { getList } from '@/services/robot'
import './index.scss'
import SearchTable from '@/components/SearchTable/index'

const Robot = () => {
  const feature = 'feature feature';
  const [dataList, setData] = useState<any[]>([])
  const [loading, setLoad] = useState(false)
  const getDate = () => {
    setLoad(true)
    getList().then((res) => {
      if (res.success) {
        setData(res.data)
        setLoad(false)
      }
    })
  }
  useEffect(() => {
    //获取列表
    // getDate()
    setLoad(true)
    setTimeout(() => {
      setData([
        {
          id: 1,
          code: '68d1e10cd4d24990b915a5a1a860ef05',
          name: 'KC-bot',
          status: 'effect',
          version: '0',
          updateId: null,
          updatedName: null,
          createdId: '5c2199426d995238ac57e179',
          createdName: 'admin',
          updatedAt: '2024-05-23 12:00:00',
          createdAt: '2024-04-16T10:21:55+08:00'
        },
        {
          id: 2,
          code: '68d1e10cd4d24990b915a5a1a860ef05',
          name: 'KC-bot',
          status: 'draft',
          version: '0',
          updateId: null,
          updatedName: null,
          createdId: '5c2199426d995238ac57e179',
          createdName: 'admin',
          updatedAt: '2024-05-24 12:00:00',
          createdAt: '2024-04-16T10:21:55+08:00'
        },
        {
          id: 3,
          code: '68d1e10cd4d24990b915a5a1a860ef05',
          name: 'KC-bot',
          status: 'invalid',
          version: '0',
          updateId: null,
          updatedName: null,
          createdId: '5c2199426d995238ac57e179',
          createdName: 'admin',
          updatedAt: '2024-05-25 12:00:00',
          createdAt: '2024-04-16T10:21:55+08:00'
        }
      ])
      setLoad(false)
    }, 2000)
  }, [])
  return (
    <div className="robot">
      <p className="rbTitle">机器人配置&管理</p>
      <div className="rbContent">
        <ScrollPanel style={{ width: '100%', height: '100%' }}>
          <SearchTable data={dataList} load={loading} />
        </ScrollPanel>
      </div>
    </div>
  )
}

export default Robot
