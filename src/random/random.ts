import * as test from './test'

interface Itest {
  soCCCD: string
  soCMND: string
  hoTen: string
  hoTenKhac: string
  ngaySinh: string
  gioiTinh: string
  quocTich: string
  danToc: string
  tonGiao: string
  queQuan: string
  noiDangKyThuongTru: string
  dacDiemNhanDang: string
  viTriNhanDang: string
  ngayCap: string
  ngayHetHan: string
  hoTenCha: string
  hoTenMe: string
  hoTenVoChong: string
  anhChanDung: string
  anhVanTayLanTroPhai: string
  anhVanTayLanTroPhaiWSQ: string
  anhVanTayLanTroTrai: string
  anhVanTayLanTroTraiWSQ: string
  anhMongMatTrai: string
  anhMongMatPhai: string
  noiSinh: string
  noiDangKyKhaiSinh: string
  noiDangKyTamTru: string
  noiOHienTai: string
}

export const testrandom: Itest = {
  soCCCD: test.randomIDCard(12),
  soCMND: '',
  hoTen: test.randomFullName(),
  hoTenKhac: '',
  ngaySinh: test.randomBirthDay(),
  gioiTinh: test.randomGender(),
  quocTich: 'Việt Nam',
  danToc: test.randomNation(),
  tonGiao: test.randomReligions(),
  queQuan: await test.getInfoAddress(),
  noiDangKyThuongTru: await test.getInfoAddress(),
  dacDiemNhanDang: test.randomDistinguishingFeatures(),
  viTriNhanDang: test.randomPosition(),
  ngayCap: '',
  ngayHetHan: '',
  hoTenCha: test.randomFullName(),
  hoTenMe: test.randomFullName(),
  hoTenVoChong: '',
  anhChanDung: '',
  anhVanTayLanTroPhai: '',
  anhVanTayLanTroPhaiWSQ: '',
  anhVanTayLanTroTrai: '',
  anhVanTayLanTroTraiWSQ: '',
  anhMongMatTrai: '',
  anhMongMatPhai: '',
  noiSinh: '',
  noiDangKyKhaiSinh: '',
  noiDangKyTamTru: await test.getInfoAddress(),
  noiOHienTai: await test.getInfoAddress()
}
