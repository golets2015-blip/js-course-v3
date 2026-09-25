import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { PowerTools } from '../testData/categories.enum';


test('Verify user can filter products by category', {
  tag: '@regression',
}, async ({ app }) => {
    await test.step('Open home page', async () => {
    await app.page.goto('/');
  });

    await test.step('Filter products by Sander category', async () => {
    await app.homePage.selectCategory(PowerTools.Sander);
  });

    await test.step('Verify filtered products', async () => {
    await expect(async () => {
      const actualNames = await app.homePage.getProductNames();

      for (const name of actualNames) {
        expect(name).toContain(PowerTools.Sander);
      }
    }).toPass();
  });
});