function tinhTongTu1Den100() {
  let tong = 0; // Khởi tạo biến tổng
  for (let i = 1; i <= 100; i++) { // Lặp từ 1 đến 100
    tong += i; // Cộng giá trị i vào tổng
  }
  return tong;// Trả về kết quả tổng
}
// Gọi hàm và in ra kết quả
console.log(tinhTongTu1Den100());

function bangCuuChuong2Den9() {
  for (let i = 2; i <= 9; i++) { // Vòng lặp ngoài cho số (i)
    console.log(`Bảng Cửu Chương ${i}`);
    for (let j = 1; j <= 10; j++) { // Vòng lặp trong cho số nhân (j)
      let ketQua = i * j;
      console.log(`${i} x ${j} = ${ketQua}`); // In kết quả phép nhân: "2 x 1 = 2", "2 x 2 = 4", ...
    }
  }
}
// Gọi hàm để chạy và xem kết quả
bangCuuChuong2Den9();

let soLe = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 !== 0) {
    soLe.push(i);
  }
}
console.log(soLe);

function generateEmails(userName) {
  let emails = ""; // Biến để chứa tất cả các email
  // Vòng lặp for để tạo 10 email
  for (let i = 1; i <= 10; i++) {
    if (i !== 10) {
      let email = `${userName}${i}@example.com`; // Tạo email: user1@example.com
      emails += email + ", "; // Thêm email vào chuỗi, cách nhau bởi dấu phẩy và dấu cách
    }
    if (i === 10) {
      let email = `${userName}${i}@example.com`;
      emails += email + "."; // Thêm email cuối vào chuỗi, kết thúc bởi dấu chấm
    }
  }
  console.log(emails); // In tất cả email ra
}
// Gọi hàm với tên người dùng
generateEmails("user");

// Mảng dữ liệu doanh thu 12 tháng
const monthlyRevenues = [
  { "month": 1, "total": 150 },
  { "month": 2, "total": 100 },
  { "month": 3, "total": 180 },
  { "month": 4, "total": 220 },
  { "month": 5, "total": 250 },
  { "month": 6, "total": 230 },
  { "month": 7, "total": 280 },
  { "month": 8, "total": 300 },
  { "month": 9, "total": 270 },
  { "month": 10, "total": 320 },
  { "month": 11, "total": 350 },
  { "month": 12, "total": 400 }
];

// Hàm tính tổng doanh thu
function calculateTotalRevenue(revenues) {
  let totalRevenue = 0; // Khởi tạo biến tổng

  // Vòng lặp for để duyệt qua từng phần tử trong mảng
  for (let i = 0; i < revenues.length; i++) {
    // Cộng giá trị 'total' của từng tháng vào biến tổng
    totalRevenue += revenues[i].total;
  }

  return totalRevenue; // Trả về tổng doanh thu
}

// Gọi hàm và in kết quả
const annualRevenue = calculateTotalRevenue(monthlyRevenues);
console.log("Tổng doanh thu của 12 tháng trong năm là:", annualRevenue); // In ra kết quả