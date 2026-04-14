import { test, expect } from '@playwright/test';

test('test4', async ({ page }) => {
  await test.step("Navigate to msterial website", async () =>  {
    await page.goto('https://material.playwrightvn.com/');
  });

  await test.step("Click Bai hoc 4", async () =>  {
    await page.getByRole('link', { name: '	Bài học 4: Personal notes' }).click();
  });

  await test.step("Add Note click", async () =>  {
    await page.locator('//input[@id = "note-title"]').fill("click");
    await page.locator('//textarea[@id = "note-content"]').fill("Hàm click dùng để thực hiện click vào các phần tử trên trang web");
    await page.click('//button[text() = "Add Note"]');
  });

  await test.step("Add Note fill", async () =>  {
    await page.locator('//input[@id = "note-title"]').fill("click");
    await page.locator('//textarea[@id = "note-content"]').fill("Hàm fill dùng để điền văn bẳn vào các trường input hoặc textarea trên trang web");
    await page.click('//button[text() = "Add Note"]');
  });

  await test.step("Add Note type", async () =>  {
    await page.locator('//input[@id = "note-title"]').fill("click");
    await page.locator('//textarea[@id = "note-content"]').fill("Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng");
    await page.click('//button[text() = "Add Note"]');
  });

  await test.step("Add Note hover", async () =>  {
    await page.locator('//input[@id = "note-title"]').fill("click");
    await page.locator('//textarea[@id = "note-content"]').fill("Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover");
    await page.click('//button[text() = "Add Note"]');
  });

  await test.step("Add Note check", async () =>  {
    await page.locator('//input[@id = "note-title"]').fill("click");
    await page.locator('//textarea[@id = "note-content"]').fill("Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked");
    await page.click('//button[text() = "Add Note"]');
  });

  await test.step("Add Note uncheck", async () =>  {
    await page.locator('//input[@id = "note-title"]').fill("click");
    await page.locator('//textarea[@id = "note-content"]').fill("Hàm uncheck dùng để đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked");
    await page.click('//button[text() = "Add Note"]');
  });

  await test.step("Add Note selectOption", async () =>  {
    await page.locator('//input[@id = "note-title"]').fill("click");
    await page.locator('//textarea[@id = "note-content"]').fill("Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown");
    await page.click('//button[text() = "Add Note"]');
  });

  await test.step("Add Note press", async () =>  {
    await page.locator('//input[@id = "note-title"]').fill("click");
    await page.locator('//textarea[@id = "note-content"]').fill("Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác");
    await page.click('//button[text() = "Add Note"]');
  });

  await test.step("Add Note dblclick", async () =>  {
    await page.locator('//input[@id = "note-title"]').fill("click");
    await page.locator('//textarea[@id = "note-content"]').fill("Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web");
    await page.click('//button[text() = "Add Note"]');
  });

  await test.step("Add Note dragAndDrop", async () =>  {
    await page.locator('//input[@id = "note-title"]').fill("click");
    await page.locator('//textarea[@id = "note-content"]').fill("Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đính trên trang web");
    await page.click('//button[text() = "Add Note"]');
  });

  await test.step("Search Notes", async () =>  {
    await page.locator('//input[@id = "search"]').fill("một hoặc nhiều");
  });
});