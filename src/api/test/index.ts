import type { testFile } from './type'
import request from '@/utils/request'
export const testImage = (data: FormData) => {
  return request<string>({
    url: '/test-image',
    method: 'post',
    data
  })
}
