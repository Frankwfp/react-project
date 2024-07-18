import { create } from 'zustand'
// import { persist } from 'zustand/middleware'
import { getList } from '../services/knowledge'
import { Know } from './interfaces'
//
export const storeKnow = create<Know>((set, get) => ({
  isLogin: false,
  list: {},
  status: true,
  message: 'aaaa',
  search: async (query = {}) => {
    const data =
      (await getList({
        url: '/search/users',
        query
      })) || {}
    set(() => ({ list: data, isLogin: true }))
  },
  setStatus: () => set((state: { status: boolean }) => ({ status: !state.status })),
  btn: () => {
    return get().status && get().isLogin
  }
}))
//
export const storeRobot = create<Know>((set, get) => ({
  isLogin: false,
  list: {},
  status: true,
  message: 'aaaa',
  search: async (query = {}) => {
    const data =
      (await getList({
        url: '/search/users',
        query
      })) || {}
    set(() => ({ list: data, isLogin: true }))
  },
  setStatus: () => set((state: { status: boolean }) => ({ status: !state.status })),
  setVal: () => {
    const btn = get().status
    if (btn) set(() => ({ message: 'bbb' }))
  }
}))
