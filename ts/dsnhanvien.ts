import { NhanVien } from './nhanvien';

export class DanhSachNhanVien {
    public mangNhanVien: Array<NhanVien> = [];
    public tinhLuongNhanVien(nhanVien) {
        this.mangNhanVien.push(nhanVien);
    }
}