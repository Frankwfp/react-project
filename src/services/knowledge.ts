import { get } from '@/services/index'

export const getList = (query = {}) => {
  return get({ url: 'abc/b/d', query })
}
