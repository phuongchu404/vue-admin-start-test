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
  danToc: 'Kinh',
  tonGiao: 'Không',
  queQuan: '',
  noiDangKyThuongTru: '',
  dacDiemNhanDang: '',
  viTriNhanDang: '',
  ngayCap: '',
  ngayHetHan: '',
  hoTenCha: '',
  hoTenMe: '',
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
  noiDangKyTamTru: '',
  noiOHienTai: ''
}
