export const isEmpty = (obj: Object & Array<any>) => {
  if (['{}', '[]', 'null', undefined].includes(JSON.stringify(obj))) {
    return true
  }
  return false
}

/**
 * 筛选请求参数
 * @param obj 筛选对象
 * @param excludeKey 排除key
 * @returns 筛选后对象
 */
export function paramsVerify<T extends Object>(obj: T, excludeKey?: any[]): T {
  const res = <T>{}
  if (!obj || typeof obj !== 'object') return res
  Object.keys(obj).forEach((key) => {
    const val = (<any>obj)[key]
    if ((!isEmpty(val) && val !== '' && val !== -9) || (excludeKey && excludeKey.includes(key))) {
      ;(<any>res)[key] = val
    }
  })
  return res
}
