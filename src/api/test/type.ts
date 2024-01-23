import type { File } from 'buffer'
import type { StringifyOptions } from 'querystring'

export interface testFile {
  name: string
  image: File
}

export interface IByHandInfo {
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

export interface IAddress {
  xa: string
  huyen: string
  thanhPho: string
  type: string
}
