import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

test('Verify user can view product details', {
  tag: '@smoke',
}, async ({ app }) => {
   
  const productName = 'Combination Pliers';
  
  await test.step('Open product details page', async () => {
    await app.page.goto('/');
    await app.homePage.clickProduct(productName);
  });

  await test.step('Verify product details', async () => {
    await expect(app.page).toHaveURL(/product/);
    await expect(app.productPage.productName).toHaveText(productName);
    await expect(app.productPage.unitPrice).toHaveText('14.15');
  });

  await test.step('Verify product actions are available', async () => {
    await expect(app.productPage.addToCart).toBeVisible();
    await expect(app.productPage.addToFavorites).toBeVisible();
  });
})