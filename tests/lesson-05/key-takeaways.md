# LESSON 5: DOM terminology, Playwring basic
## 1. Javascript
### Javascript - Function expression
- Function expression là định nghĩa function bằng cách <u>gán nó cho 1 biến</u>
```javascript
// Function Declaration (Khai báo hàm)
function add(a, b) {
    return a + b;
}

// Function Expression (Biểu thức hàm)
const add = function (a, b) {
    return a + b;
};

// So sánh cách gọi
console.log(add(2, 3)); // 5 - cả 2 đều giống nhau
```
### Javascript - Lambda function (Arrow Function)
- Lambda function (còn gọi là Arrow Function)
- Xuất hiện lần đầu trong ES6 (ES2015)
- Đây là cách viết <u>ngắn gọn hơn</u> cho function
- Sử dụng dấu **=>**
```javascript
// Function truyền thống
function add(a, b) {
    return a + b;
}

// Function Expression (Biểu thức hàm)
const add = function (a, b) {
    return a + b;
};

// Arrow function (Lambda)
const add = (a, b) => {
    return a + b;
};
```
- Lambda function: một số cách viết khác
- Nếu chỉ có 1 dòng code => có thể "rút gọn" cặp ngoặc nhọn
```javascript
// Cú pháp ngắn gọn nhất (implicit return)
const add = (a, b) => a + b;
```
- Không có tham số
```javascript
// Phải có dấu ngoặc tròn rỗng
const greet = () => console.log("Hello!");
const getRandom = () => Math.random();
```
- Một tham số
```javascript
// Có thể bỏ dấu ngoặc tròn
const double = x => x * 2;
const square = x => x * x;

// Hoặc giữ dấu ngoặc (tùy style)
const triple = (x) => x * 3;
```
### Javascript - Anonymous function (hàm ẩn danh)
- Function <u>không có tên</u>
- Được sử dụng khi function <u>chỉ cần dùng một lần</u> hoặc <u>làm callback</u>
```javascript
// Named function (có tên)
function nameFunction() {
    console.log("I have a name!");
}

// Anonymous function (không tên)
function () { // SyntaxError không thể đứng một mình
    console.log("I'm anonymous!");
}

// Anonymous function phải được sử dụng ngay
// 1. Gán cho biến
const anonymousFunc = function() {
    console.log("I'm anonymous but stored in a variable!");
};

// 2. Dùng hàm callback
setTimeout(function() {
    console.log("Anonymous callback!");
}, 1000);
```
## 2. DOM
- Khi vào 1 website, ta nhìn thấy website dưới dạng:
    - Các khối text
    - Các hình ảnh
    - Các liên kết
    - Các ô input
- **Máy tính** sẽ "nhìn" ở dưới dạng "cây có cấu trúc"
    - Mở cây này bằng cách bấm <u>phím F12</u> (hoặc chuột phải vào vùng trống, chọn "Inspect"); sau đó chọn tab "**Element**"
    - Cấu trúc này gọi là DOM (Document Object Model)
- VD thực tế: ![alt text](image.png)
- Trên thực tế, có rất nhiều loại thẻ khác nhau:
    - **Thẻ tiêu chuẩn**: thẻ do tổ chức uy tín mozilla định nghĩa
    - **Thẻ tự định nghĩa**: do lập trình viên/ website tự định nghĩa
- **Các thẻ tiêu chuẩn** thường gặp:
    - **Thẻ cấu trúc cơ bản**:
        - `<html>`: Thẻ gốc của trang
        - `<head>`: Chứa metadata: tiêu đề website, hiển thị Google
        - `<body>`: Nội dung của cả website hiển thị
        - `<div>`: Khối/container chung
        - `<span>`: Inline container
        - `<header>`, `<footer>`, `<nav>`, `<section>`: Thẻ ngữ nghĩa
    - **Thẻ nội dung**:
        - `<h1>` đến `<h6>`: Tiêu đề
        - `<p>`: Đoạn văn
        - `<a>`: Liên kết
        - `<img>`: Hình ảnh
        - `<ul>`, `<ol>`, `<li>`: Danh sách
    - **Thẻ Form (Quan trọng cho Testing)**:
        - `<form>`: Biểu mẫu
        - `<input>`: Ô nhập liệu (text, password, checkbox, radio, etc.)
        - `<button>`: Nút bấm
        - `<select>` và `<option>`: Dropdown
        - `<textarea>`: Vùng văn bản nhiều dòng
    - **Thẻ Bảng `<table>`**:
        - `<caption>`: tiêu đề của bảng (không bắt buộc).
        - `<thead>`: phần đầu bảng, chứa các hàng tiêu đề.
        - `<tbody>`: phần thân bảng, chứa dữ liệu chính.
        - `<tfoot>`: phần chân bảng, dùng cho tổng kết (không bắt buộc).
        - Mỗi phần gồm các hàng `<tr>` (table row).
        - Trong `<tr>`:
            - `<th>` dùng cho ô tiêu đề.
            - `<td>` dùng cho ô dữ liệu.
## 3. MindMup
- Vẽ cây DOM
- TAB: để thêm sang ngang
- ENTER: để thêm xuống dưới
## 4. Selector
- **Automation = tương tác** với các phần tử trên trang web
    - Input
    - Fill
    - Click
- Để tương tác được, ta cần **tìm** được phần tử này
- Selector là công cụ giúp ta **tìm**
- Có 3 loại selector thường dùng:
    - Xpath
        - Dùng được trong <u>hầu hết</u> các trường hợp (99.99%)
        - <u>Đa dạng</u>, có khả năng tìm các phần tử khó
        - Hơi dài
        - VD: `//button[normalize-space() = 'Add to cart']`
    - CSS selector
        - Ngắn gọn, performance cao
        - Dùng cho các trường hợp dễ tìm
        - Không linh hoạt bằng XPath
        - VD: `.add-to-cart`
    - Playwight selector
        - Chỉ dùng riêng cho Playwright
        - Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
        - Hướng tới "giống người dùng đang nhìn thấy gì"
        - VD: page.getByText("Add to cart")
### Khi nào thì dùng gì?
- Playwright selector > CSS selector > XPath
- Vẫn cần học hiểu cả 3 loại để có thể "cân" được mọi dự án
- Có những dụ án thích dùng CSS, thích dùng XPath, và buộc phải tuân theo
### XPath selector
- XPath = XML
- Có 2 loại:
    - Tuyệt đối: đi dọc theo cây DOM
        - Bắt đầu bởi 1 /
    - Tương đối: tìm dựa vào đặc tính
        - Bắt đầu bởi 2 //
        - `//tenthe[@thuoctinh="gia tri"]
- Nên dùng XPath tương đối
## 5. Playwright basic syntax
- Automation = tương tác + verify
- Trong bài này, ta học cách <u>tương tác</u> với các phần tử
    - Viết một test
    - Tổ chức thành các step
    - Tương tác cơ bản
        - Navigation
        - Click
        - Fill
- **test**: Đơn vị cơ bản để khai báo 1 test
```javascript
import { test } from '@playwright/test';

test('<tên test>', async ({ page}) => {
    await test.step('Teen step', async () => {
        // Code here
    });
});
```
- step: Đơn vị nhỏ hơn test, để khai báo từng step của test case
    - Lưu ý: step nên được <u>map 1-1</u> với <u>test case</u> để dễ dàng maintain
```javascript
await test.step('Teen step', async () => {
    // Code here
});
```
### Navigate
```javascript
await page.goto('https://pw-practice.playwrightvn.com/');
```
- Locate
    - Sử dụng page locator("<selector>") để chọn phần tử trên trang
    - VD: `page.locator("//input[@id='email']");`
### Click
```javascript
Single click
await page.locator("//button").click();

Double click
await page.locator("//button").dbclick();

Click chuột phải
page.locator("//button").click({
    button: 'right'
})

Click chuột kèm bấm phím khác
page.locator("").click({
    modifiers: ['Shift'],
})
```
- Input
### Fill
- Fill giống việc bạn <u>paste content</u> vào 1 ô input
```javascript
page.locator("//input").fill('Playwright Viet Nam');
```
- pressSequentially giống việc bạn <u>gõ từng chữ cái</u> vào ô input
```javascript
page.locator("//input").pressSequentially('Playwright Viet Nam', { delay: 100});
```
- Radio/checkbox
```javascript
Lấy giá trị hiện tại đang là check hay không:
const isChecked = page.locator("//input").isChecked();

Check/ uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);
```
- Select
```javascript
await page.locator('//select[@id="country"]').selectOption({ label: 'USA' })
```
- Upload file
```javascript
await page.locator("//input[@id='profile']").setInputFiles("<file-path>");
```
### Kiến thức bổ sung
- Hover 
    - Để hover vào phần tử
    ```javascript
    await page.locator("<xpath here").hover();
    ```
- text()
    - Dùng để tìm ra phần tử có giá trị tương ứng
    - VD: Với DOM sau
    ```javascript
    <div @class="playwright">This is a text</div>
    ```
    - Thì để chọn phần tử này, ta dùng cú pháp như sau
    ```javascript
    div[text()='This is a text']
    ```
- contains()
    - Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text
    -VD
    ```javascript
    <div> Tôi là Alex </div> // Text này có 1 ký tự space ở đầu và cuối 
    <div> Bây giờ là: 08:07 </div> // Thời gian sẽ tùy vào thời điểm truy cập trang web
    ```
    - Để chọn các phần tử này, ta dùng hàm contains(<giá trị>, <giá trị contains>)
    - VD
    ```javascript
    div[contains(text(), 'Tôi là Alex')]
    div[contains(text(), 'Bây giờ là:')]
    ```
- confirmation dialog
    ```javascript
    import { test } from '@playwright/test';

    test('Ex3', async ({ page }) => {
        await page.goto('https://material.playwrightvn.com');
        await page.click("//a[@href='03-xpath-todo-list.html']");

        await page.locator("//input[@id='new-task']").fill("Task 1");
        await page.click("//button[@id='add-task']");

        page.on('dialog', async dialog => dialog.accept());
        await page.click("//button[test()='Delete']");
    })
    ```
## 6. Playwright
- Để chạy test trên các file khác thư mục tests
    - B1: trong file playwright.config.ts thêm // vào testDir: './tests',
    ```javascript
    export default defineConfig({
    // testDir: './tests',
    ```
    - B2: nhớ thêm .spec.ts vào tên file