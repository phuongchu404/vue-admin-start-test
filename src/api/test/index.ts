import type { testFile, IAddress } from './type'
import request from '@/utils/request'
export const testImage = (data: FormData) => {
  return request<string>({
    url: '/test-image',
    method: 'post',
    data
  })
}

export const getAddress = (id: number) => {
  return request<IAddress>({
    url: `/address?id=${id}`,
    method: 'get'
  })
}
