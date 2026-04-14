// Hàm multiply nhận 2 tham số a, b
function multiply(a, b) {
  // Tính tích của a và b
  const result = a * b;
  // In kết quả ra console
  console.log(`Tích của ${a} và ${b} là: ${result}`);
}

multiply(5, 3);

function findMin(a, b, c) {
  let min = a; // Giả định a là nhỏ nhất ban đầu
  if (b < min) {
    min = b; // Nếu b nhỏ hơn min hiện tại, cập nhật min
  }
  if (c < min) {
    min = c; // Nếu c nhỏ hơn min hiện tại, cập nhật min
  }
  return min; // Trả về giá trị nhỏ nhất
}

// Gọi hàm và in kết quả
let result = findMin(5, 2, 8);
console.log("Giá trị nhỏ nhất là:", result);

// Định nghĩa hàm getTopStudents
function getTopStudents(students, threshold) {
  const topStudents = []; // Khởi tạo mảng mới để chứa tên học sinh

  // Lặp qua từng học sinh trong mảng students
  for (let i = 0; i < students.length; i++) {
    const student = students[i]; // Lấy đối tượng học sinh hiện tại

    // Kiểm tra nếu điểm >= threshold
    if (student.score >= threshold) {
      topStudents.push(student.name); // Thêm tên học sinh vào mảng kết quả
    }
  }

  return topStudents; // Trả về mảng chứa tên các học sinh top
}

const students = [
  { name: "An", score: 85 },
  { name: "Binh", score: 92 },
  { name: "Chi", score: 78 },
  { name: "Dung", score: 90 },
  { name: "Em", score: 88 }
];

const threshold = 90;
const ketQua = getTopStudents(students, threshold);
console.log(`Các học sinh có điểm >= ${threshold}:`, ketQua); 

function calculateInterest(principal, rate, years) {
  // Lãi đơn = Gốc + Gốc * Lãi suất * Số năm / 100
  const total = principal + principal * rate * years / 100;
  return total;
}

const principal = 10000000;
const rate = 5;
const years = 3;

const total = calculateInterest(principal, rate, years);

console.log(`Số tiền gốc ban đầu: ${principal} VND`);
console.log(`Lãi suất: ${rate}%`);
console.log(`Số năm: ${years}`);
console.log(`Tổng số tiền sau ${years} năm (lãi đơn): ${total} VND`);