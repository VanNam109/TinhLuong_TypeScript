import { NhanVien } from './nhanvien';

export class QuanLy extends NhanVien {
    public tinhLuong() {
        this.tongLuong = this.luongCoBan * 1.5;

    }
}