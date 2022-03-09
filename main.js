document.getElementById("btnTinhLuongNV").onclick = function(){
    /**
     * Đầu vào:
     * + Mặc định tiền lương 1 ngày 100.000 VND
     * + Cho nhập số ngày làm
     * Xử lý:
     * + Tính tổng lương theo ngày => số ngày làm * tiền lương 1 ngày
     * Đầu ra:
     * + Log ra console số tiền lương
     */
    // Đầu vào:
    const LUONG = 100000;
    var soNgayLam = document.getElementById("txtSoNgayLam").value;
    
    // Xử lý:
    var tongLuongNV = soNgayLam * LUONG;
    var currentFormat = new Intl.NumberFormat('vn-VN');
    var tienVNDLuong = currentFormat.format(tongLuongNV);

    // Đầu ra:
    var kqLuongNV   = "<div class='alert alert-success'>";
    kqLuongNV       +=      "<p>Tiền lương nhân viên là: " + tienVNDLuong + "</p>";
    kqLuongNV       += "</div>";
    document.getElementById("footerTinhLuongNV").innerHTML = kqLuongNV;
}
document.getElementById("btnGiaTriTrungBinh").onclick = function(){
    /**
     * Đầu vào:
     * + Cho nhập 5 số thực
     * Xử lý:
     * + Tính giá trị trung bình của 5 số thực => (số thứ nhất + số thứ hai + số thứ ba + số thứ tư + số thứ năm) / 5
     * Đầu ra:
     * + Log ra console giá trị của số thực
     */
    // Đầu vào:
    var soThuNhat = document.getElementById("txtSoThuNhat").value * 1;
    var soThuHai = document.getElementById("txtSoThuHai").value * 1;
    var soThuBa = document.getElementById("txtSoThuBa").value * 1;
    var soThuTu = document.getElementById("txtSoThuTu").value * 1;
    var soThuNam = document.getElementById("txtSoThuNam").value * 1;

    // Xử lý:
    var giaTriTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;

    // Đầu ra
    var kqGiaTriTrungBinh = "<div class='alert alert-success'>";
    kqGiaTriTrungBinh       +=      "<p>Giá trị trung bình là: " + giaTriTrungBinh + "</p>";
    kqGiaTriTrungBinh       += "</div>";
    document.getElementById("footerGiaTriTrungBinh").innerHTML = kqGiaTriTrungBinh;
}
document.getElementById("btnTienQuyDoi").onclick = function(){
    /**
     * Đầu vào:
     * + Mặc định giá 1 USD là 23500 VND
     * + Cho nhập số tiền quy đổi
     * Xử lý:
     * + Tính số tiền quy đổi => tiền quy đổi * tỉ giá
     * Đầu ra:
     * + Log ra console số tiền cần quy đổi
     */
    // Đầu vào:
    const GIA_USD = 23500;
    var tienQuyDoi = document.getElementById("txtTienQuyDoi").value;

    // Xử lý:
    var soTienQuyDoi = tienQuyDoi * GIA_USD;
    var currentFormat = new Intl.NumberFormat('vn-VN');
    var tienVND_quyDoi = currentFormat.format(soTienQuyDoi);

    // Đầu ra:
    var kqLuongNV   = "<div class='alert alert-success'>";
    kqLuongNV       +=      "<p>Số tiền được quy đổi là: " + tienVND_quyDoi + "</p>";
    kqLuongNV       += "</div>";
    document.getElementById("footerTienQuyDoi").innerHTML = kqLuongNV;
}
document.getElementById("btnTinhHCN").onclick = function(){
    /**
     * Đầu vào:
     * + Cho nhập số chiều dài, số chiều rộng của hình chữ nhật
     * Xử lý:
     * + Tính chu vi hình chữ nhật => (dài + rộng) * 2
     * + Tinh iện tích hình chữ nhật => dài * rộng
     * Đầu ra:
     * + Log ra console chu vi, diện tích hình chữ nhật
     */
    //  Đầu vào:
    var chieuDai = document.getElementById("txtChieuDai").value * 1;
    var chieuRong = document.getElementById("txtChieuRong").value * 1;

    // Xử lý:
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

    // Đầu ra:
    var kqHinhChuNhat   = "<div class='alert alert-success'>";
    kqHinhChuNhat       +=      "<p>Chu vi hình chữ nhật là: " + chuVi + "</p>";
    kqHinhChuNhat       +=      "<p>Diện tích hình chữ nhật là: " + dienTich + "</p>";
    kqHinhChuNhat       += "</div>";
    document.getElementById("footerTinhHCN").innerHTML = kqHinhChuNhat;
}
document.getElementById("btnTong2kyso").onclick = function(){
    /**
     * Đầu vào:
     * + Cho nhập số 2 ký số
     * Xử lý:
     * + Tìm số hàng đơn vị => số % 10
     * + Tìm số hàng chục => số / 10
     * + Tính tổng 2 ký số
     * Đầu ra:
     * + Log ra console tổng của 2 ký số
     */
    //  Đầu vào:
    var so2kySo = document.getElementById("txt2kySo").value * 1;

    //  Xử lý:
    var soHangDV = Math.floor(so2kySo % 10);
    console.log(soHangDV);
    var soHangChuc = Math.floor(so2kySo / 10);
    console.log(soHangChuc);
    var tong2kySo = soHangChuc + soHangDV;

    //  Đầu ra:
    var kqtong2kySo   = "<div class='alert alert-success'>";
    kqtong2kySo       +=      "<p>Tổng của 2 ký số là: " + tong2kySo + "</p>";
    kqtong2kySo     += "</div>";
    document.getElementById("footerTong2kyso").innerHTML = kqtong2kySo;
}