import { test, expect } from '@playwright/test';

test('test3', async ({ page }) => {
  await test.step("Navigate to msterial website", async () =>  {
    await page.goto('https://material.playwrightvn.com/');
  });

  await test.step("Click Bai hoc 3", async () =>  {
    await page.getByRole('link', { name: '	Bài học 3: Todo page' }).click();
  });

  await test.step("Add 100 Todo", async () =>  {
    for (let i = 0; i <= 100; i++) {
      await page.locator('//input[@id = "new-task"]').fill(`Todo ${i}`);
      await page.click('//button[text() = "Add Task"]');
    }
  });

  await test.step("Delete odd-numbered Todo", async () =>  {
    page.on('dialog', async dialog => dialog.accept());
    for (let i = 0; i <= 100; i++) {
      if(i % 2 !== 0) {
        await page.click(`//button[@id = "todo-${i}-delete"]`);
      }
    }
  });
});