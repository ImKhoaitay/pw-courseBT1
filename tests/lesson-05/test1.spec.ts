import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  await test.step("Navigate to msterial website", async () =>  {
    await page.goto('https://material.playwrightvn.com/');
  });

  await test.step("Click Bai hoc 1", async () =>  {
    await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();
  });

  await test.step("Input Username", async () =>  {
    await page.locator('//input[@id = "username"]').fill("Thanh Vân");
  });

  await test.step("Input Email", async () =>  {
    await page.locator('//input[@id = "email"]').fill("thanhvan21700@gmail.com");
  });

  await test.step("Radio button Gender", async () =>  {
    await page.locator('//input[@id = "female"]').check();
  });

  await test.step("Checkbox Hobbies", async () =>  {
    await page.locator('//input[@id = "cooking"]').check();
  });

  await test.step("Select option Interests", async () =>  {
    await page.locator('//select[@id = "interests"]').selectOption("Music");
  });

  await test.step("Select option Country", async () =>  {
    await page.locator('//select[@id = "country"]').selectOption("United States");
  });

  await test.step("Input Date of Birth", async () =>  {
    await page.locator('//input[@id = "dob"]').fill("2000-07-21");
  });

  await test.step("Upload file Profile Picture", async () =>  {
    await page.locator('//input[@id = "profile"]').setInputFiles("tests/data-test/data-test.txt");
  });

  
  await test.step("Textarea Biography", async () =>  {
    await page.locator('//textarea[@id = "bio"]').fill("Tôi không lười, tôi ở chế độ tiết kiệm năng lượng");
  });

  await test.step("Input Rate Us", async () =>  {
    await page.locator('//input[@id = "rating"]').fill("7");
  });

  await test.step("Input Favorite Color", async () =>  {
    await page.locator('//input[@id = "favcolor"]').fill("#ffd1e7");
  });

  await test.step("Checkbox Newsletter", async () =>  {
    await page.locator('//input[@id = "newsletter"]').check();
  });

  await test.step("Span Enable Feature", async () =>  {
    await page.locator('//span[@class = "slider round"]').click();
  });

  await test.step("Hover Star Rating", async () => {
    await page.locator('#starRating').hover({ position: { x: 80, y: 10 } });
    await page.mouse.down();
    await page.mouse.up();
  });

  await test.step("Input Custom Date", async () =>  {
    await page.locator('//input[@id = "customDate"]').evaluate((el) => {
    const input = el as HTMLInputElement;
    input.removeAttribute('readonly');
    input.value = '2026-03-10';
    });
  });

  await test.step("Input Custom Date", async () =>  {
    await page.locator('//input[@id = "customDate"]').evaluate((el) => {
    const input = el as HTMLInputElement;
    input.removeAttribute('readonly');
    input.value = '2026-03-10';
    });
  });

  await test.step("Button Register", async () =>  {
    await page.click('//button[text() = "Register"]');
  });
});