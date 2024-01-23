import {
  machines,
  firstNames,
  lastNames,
  middleNames,
  provinces,
  districts,
  communes,
  stress,
  genders,
  features,
  positions,
  detailXa,
  nations,
  religions
} from './index'
import type { IAddress } from '@/api/test/type'
import { getAddress } from '@/api/test'
function randomString(value: string[]) {
  const index = Math.floor(Math.random() * value.length) + 1
  return value[index]
}

function convertFormatDateMonth(x: number) {
  if (x < 10) {
    return '0' + x
  } else {
    return '' + x
  }
}

export function randomAddress(length: number) {
  let commune: string = randomString(stress)
  while (commune.length > length) {
    commune = randomString(stress)
  }
  return commune
}

export const randomprovince = () => {
  let commune: string = randomString(communes)
  let district: string = randomString(districts)
  let province: string = randomString(provinces)
  let line2: string = commune + ', ' + district + ', ' + province
  while (line2.length > 45) {
    district = randomString(districts)
    province = randomString(provinces)
    commune = randomString(communes)
    line2 = commune + ', ' + province + ', ' + province
  }
  return line2
}

export const randomFullName = () => {
  let firstName: string = randomString(firstNames)
  let lastName: string = randomString(lastNames)
  let middleName: string = randomString(middleNames)
  let name: string = firstName + middleName + lastName
  while (name.length > 30) {
    firstName = randomString(firstNames)
    lastName = randomString(lastNames)
    middleName = randomString(middleNames)
    name = firstName + middleName + lastName
  }
  return name
}

export const randomIDCard = (n: number) => {
  const alphaNumericString: string = '0123456789'
  let sb = ''
  for (let i = 0; i < n; i++) {
    const index = Math.floor(Math.random() * alphaNumericString.length)
    sb += alphaNumericString.charAt(index)
  }
  return sb
}

export const randomBirthDay = () => {
  const month: number = Math.floor(Math.random() * 12) + 1
  const year: number = Math.floor(Math.random() * (2020 - 2015 + 1)) + 2015
  let date = 0
  if (month === 2) {
    date = Math.floor(Math.random() * 28) + 1
  } else {
    date = Math.floor(Math.random() * 30) + 1
  }
  return convertFormatDateMonth(date) + '/' + convertFormatDateMonth(month) + '/' + year
}

export const randomMachine = () => {
  return randomString(machines)
}

export const randomGender = () => {
  return randomString(genders)
}

export const randomDistinguishingFeatures = () => {
  return randomString(features)
}

export const randomPosition = () => {
  return randomString(positions)
}

export const randomNumber = (length: number) => {
  const i = Math.floor(Math.random() * 999999)
  let str = String(i)
  while (str.length < length) {
    str = '0' + str
  }
  return str
}
export const getInfoAddress = async () => {
  const iy = Math.floor(Math.random() * 700) + 1
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { status, data } = await getAddress(iy)
  let detail: string = ''
  if (status !== 200) return detail
  else {
    if (data?.type === 'Xã') {
      detail = randomString(detailXa)
    } else {
      const index = Math.floor(Math.random() * 100)
      detail = index + ' ' + randomString(stress)
    }
    return detail + ', ' + data.xa + ', ' + data.huyen + ', ' + data.thanhPho
  }
}

export const randomNation = () => {
  return randomString(nations)
}

export const randomReligions = () => {
  return randomString(religions)
}
