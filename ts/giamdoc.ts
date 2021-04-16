import { NhanVien } from './nhanvien';

export class GiamDoc extends NhanVien {
    public tinhLuong() {
        this.tongLuong = this.luongCoBan * 3;

    }
}