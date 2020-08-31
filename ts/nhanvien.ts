export class NhanVien {
    public maNhanVien: string;
    public hoTen: string;
    public luongCoBan: number;
    public loaiNhanVien: string;
    public tongLuong: number;

    constructor(maNhanVien: string, hoTen: string, luongCoBan: number, loaiNhanVien: string) {
        this.maNhanVien = maNhanVien;
        this.hoTen = hoTen;
        this.luongCoBan = luongCoBan;
        this.loaiNhanVien = loaiNhanVien;

    }
    public tinhLuong() {
        this.tongLuong = this.luongCoBan;
    }
}