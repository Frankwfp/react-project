import { get } from '@/services/index'

export const getList = (query = {}) => {
  return get<{ success: boolean; code: string; data: any[]; [propname: string]: any }>({
    url: '/bot/info/list',
    query
  })
}
