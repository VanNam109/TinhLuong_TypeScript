import { DanhSachNhanVien } from './../ts/dsnhanvien';
import { QuanLy } from './../ts/quanly';
import { NhanVien } from './../ts/nhanvien';
import { GiamDoc } from './../ts/giamdoc';


let DSNhanVien = new DanhSachNhanVien();
let tinhLuongNhanVien = () => {
    let maNhanVien = (<HTMLInputElement>document.getElementById('maNhanVien')).value;
    let hoTen = (<HTMLInputElement>document.getElementById('hoTen')).value;
    let luongCoBan: any = (<HTMLInputElement>document.getElementById('luongCoBan')).value;
    luongCoBan = parseInt(luongCoBan);

    let loaiNV = KiemTraLoaiNhanVien();
    if (loaiNV == null) {
        alert('Vui lòng chọn nhân viên');
    }
    else {
        let NhanVienMoi: NhanVien;
        if (loaiNV == 'NhanVien') {
            NhanVienMoi = new NhanVien(maNhanVien, hoTen, luongCoBan, loaiNV);

        }
        else if (loaiNV == 'QuanLy') {
            NhanVienMoi = new QuanLy(maNhanVien, hoTen, luongCoBan, loaiNV);

        }
        else if (loaiNV == 'GiamDoc') {
            NhanVienMoi = new GiamDoc(maNhanVien, hoTen, luongCoBan, loaiNV);

        }

        NhanVienMoi.tinhLuong();
        console.log(NhanVienMoi);
        DSNhanVien.tinhLuongNhanVien(NhanVienMoi);
        console.log(DSNhanVien.mangNhanVien);
        bangNhanVien();
    }
}

let KiemTraLoaiNhanVien = () => {
    let mangLoaiNhanVien: NodeListOf<any> = document.getElementsByName("loaiNV");
    for (let i in mangLoaiNhanVien) {
        if (mangLoaiNhanVien[i].checked) {
            return mangLoaiNhanVien[i].value;
        }
    }
    return null;
}
//Tạo bảng nhân vien
let bangNhanVien = () => {
    let content: string = '';
    for (let nhanVien of DSNhanVien.mangNhanVien) {
        let { maNhanVien, hoTen, luongCoBan, loaiNhanVien, tongLuong } = nhanVien;
        content += `
        <tr class='bg-white text-blue'>
        <td>${maNhanVien}</td>
        <td>${hoTen}</td>
        <td>${loaiNhanVien}</td>
        <td>${luongCoBan}</td>
        <td>${tongLuong}</td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML = content;
}

//Gọi button
let btnTinh = <HTMLButtonElement>document.getElementById('btnTinh');
btnTinh.addEventListener('click', tinhLuongNhanVien);