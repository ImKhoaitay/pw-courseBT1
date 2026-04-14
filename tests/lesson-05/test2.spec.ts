import { test, expect } from '@playwright/test';

test('test2', async ({ page }) => {
  await test.step("Navigate to msterial website", async () =>  {
    await page.goto('https://material.playwrightvn.com/');
  });
  
  await test.step("Click Bai hoc 2", async () =>  {
    await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
  });

  await test.step("Add 2 Product 1", async () =>  {
    await page.dblclick('//button[@data-product-id = "1"]');
  });

  await test.step("Add 3 Product 2", async () =>  {
    await page.dblclick('//button[@data-product-id = "2"]');
    await page.click('//button[@data-product-id = "2"]');
  });

  await test.step("Add 1 Product 3", async () =>  {
    await page.click('//button[@data-product-id = "3"]');
  });
});