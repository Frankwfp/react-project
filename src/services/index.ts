import axios from 'axios'
import qs from 'query-string'

interface Querys {
  url: string
  query?: object
}

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

export const get = async <T>({ url, query = {} }: Querys): Promise<T> => {
  const queryString = `?${qs.stringify(query)}`
  const response = await service.get(`${url + queryString}`)
  return response.data
}
export const post = async <T>({ url, query = {} }: Querys): Promise<T> => {
  const response = await service.post(url, query)
  return response.data
}
