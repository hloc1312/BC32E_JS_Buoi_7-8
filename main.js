var arrNumber = [];
document.querySelector("#btnThemSo").onclick = function () {
  // input number
  var nhapSo = Number(document.querySelector("#soN").value);

  //   output string
  var htmlString = "";

  //   progress
  htmlString = arrNumber.push(nhapSo);
  //   output ra màn hình
  document.querySelector("#hienThiMang").innerHTML = arrNumber + " ";
};
// Bài 1: tổng các số nguyên dương trong mảng
document.querySelector("#btnTinhTong").onclick = function () {
  // input arrNumber
  // output number
  var tong = 0;
  // progress
  for (var index = 0; index < arrNumber.length; index++) {
    tong += arrNumber[index];
  }
  //   output ra giao diện màn hình
  document.querySelector("#ketQua_b1").innerHTML = tong;
};

// Bài 2: Đếm có bao nhiêu số dương trong mảng.
document.getElementById("btnSoDuong").onclick = function () {
  // input arrNumber
  // output number
  var demSoDuong = 0;
  //   progress
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      demSoDuong++;
    }
  }
  //   output ra màn hình giao diện
  document.getElementById("ketQua_b2").innerHTML = demSoDuong;
};

// Bài 3: Tìm số nhỏ nhất trong mảng.
document.getElementById("btnSoNhoNhat").onclick = function () {
  // input number
  // output number
  var ketQua = 0;
  //   progress
  var min = arrNumber[0];
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < min) {
      min = arrNumber[i];
    }
  }
  //   output ra màn hình giao diện
  document.getElementById("ketQua_b3").innerHTML = min;
};

// Bài 4: Tìm số dương nhỏ nhất trong mảng.

document.querySelector("#btnSoDuongNhoNhat").onclick = function () {
  // input arrNumber
  // output ketQua: number
  var ketQua = 0;
  // progress
  // tạo mảng số dương mới
  var newArrNumber = [];
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] > 0) {
      newArrNumber.push(arrNumber[i]);
    }
  }
  // tìm kiếm số dương nhỏ nhất
  var min = arrNumber[0];
  if (newArrNumber.length > 0) {
    for (var i = 0; i < newArrNumber.length; i++) {
      if (newArrNumber[i] < min) {
        min = newArrNumber[i];
      }
    }
    ketQua = min;
  } else {
    ketQua = "Không có số dương";
  }

  // output hiển thị giao diện ra màn hình
  document.getElementById("ketQua_b4").innerHTML = ketQua;
};

// Bài 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
document.getElementById("btnSoChanCuoiCung").onclick = function () {
  // input arrNumber
  // output ketQua: number
  var ketQua = -1;
  // progress
  for (var i = arrNumber.length - 1; i >= 0; i--) {
    if (arrNumber[i] % 2 === 0) {
      ketQua = arrNumber[i];
      break;
    }
  }

  // output in ra giao diện màn hình
  document.getElementById("ketQua_b5").innerHTML = ketQua;
};

// Bài 6: đổi chỗ
document.getElementById("btnDoiCho").onclick = function () {
  // input arrNumber, viTri1: number, viTri2: number
  var viTri1 = Number(document.getElementById("viTri1").value);
  var viTri2 = Number(document.getElementById("viTri2").value);
  // output ketQua: string
  var ketQua = "";
  // progress
  var temp = arrNumber[viTri1];
  arrNumber[viTri1] = arrNumber[viTri2];
  arrNumber[viTri2] = temp;
  ketQua = "Mảng sau khi hoán đổi: " + arrNumber;

  // output in màn hình kết quả
  document.getElementById("ketQua_b6").innerHTML = ketQua;
};

// Bài 7: Sắp xếp mảng theo thứ tự tăng dần.
document.getElementById("btnSapXepTangDan").onclick = function () {
  // input arrNumber
  // output ketQua: string
  var ketQua = "";
  // progress

  for (var i = 0; i < arrNumber.length - 1; i++) {
    for (var j = i + 1; j < arrNumber.length; j++) {
      if (arrNumber[i] > arrNumber[j]) {
        var temp = arrNumber[i];
        arrNumber[i] = arrNumber[j];
        arrNumber[j] = temp;
      }
    }
  }
  ketQua = "Sau khi sắp xếp tăng dần: " + arrNumber;

  // output hiển thị ra giao diện
  document.getElementById("ketQua_b7").innerHTML = ketQua;
};

//  Bài 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về -1

document.querySelector("#btnSoNguyenTo").onclick = function () {
  // input arrNumber
  // output ketQua: number
  var ketQua = 0;
  // progress
  for (var i = 0; i < arrNumber.length; i++) {
    // kiểm tra snt
    var kiemTra = true;
    if (arrNumber[i] === 1) {
      kiemTra = false;
    }
    for (var uoc = 2; uoc < Math.sqrt(arrNumber[i]); uoc++) {
      if (arrNumber[i] % uoc === 0) {
        kiemTra = false;
        break;
      }
    }
    // kiểm tra mảng có snt ko
    if (kiemTra === true) {
      ketQua = "Số nguyên tố: " + arrNumber[i] + " - Vị trí " + i;
    } else {
      ketQua = -1;
    }
    // output kết quả ra màn hình giao diện
    document.getElementById("ketQua_b8").innerHTML = ketQua;
  }
};

// Bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên ?

// Thêm số vào mảng mới
var arrNumberBai9 = [];
document.getElementById("btnThemSo_9").onclick = function () {
  // input nhapSo:number
  var nhapSo = Number(document.getElementById("nhapSo_9").value);

  // output ketQua = string
  var ketQua = "";
  // progress

  ketQua = arrNumberBai9.push(nhapSo) + " ";
  // output ra màn hình giao diện
  document.getElementById("mangBai9").innerHTML = arrNumberBai9;
};

// Đếm số nguyên
document.getElementById("btnDemSoNguyen").onclick = function () {
  // input arrNumberBai9
  // output ketQua = number
  var ketQua = 0;
  // progress
  var dem = 0;
  for (var i = 0; i < arrNumberBai9.length; i++) {
    if (Number.isInteger(arrNumberBai9[i])) {
      dem++;
    }
  }
  ketQua = dem;
  // output ras màn hình giao diện
  document.getElementById("ketQua_b9").innerHTML = ketQua;
};

// Bài 10: So sanh số lượng số âm và số dương xem nào nhiều hơn
document.getElementById("btnDemSoAmDuong").onclick = function () {
  // input arrNumber: number
  // output ketQua = string
  var ketQua = "";
  // progress
  var demSoDuong = 0;
  var demSoAm = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] >= 0) {
      demSoDuong++;
    } else {
      demSoAm++;
    }
  }
  if (demSoDuong > demSoAm) {
    ketQua = "Số dương " + demSoDuong + " > " + "Số âm " + demSoAm;
  } else if (demSoDuong === demSoAm) {
    ketQua = "Số dương " + demSoDuong + " = " + "Số âm " + demSoAm;
  } else {
    ketQua = "Số dương " + demSoDuong + " < " + "Số âm " + demSoAm;
  }

  // output ras màn hình giao diện
  document.getElementById("ketQua_b10").innerHTML = ketQua;
};
