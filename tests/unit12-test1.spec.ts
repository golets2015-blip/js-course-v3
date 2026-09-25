import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

test('Verify user can add product to cart', {
  tag: '@smoke',
}, async ({app}) => {
    const productName = 'Slip Joint Pliers';

    const alertMessage = app.basePage.alertMessage;

  await test.step('Open product details page', async () => {
    await app.page.goto('/');
    await app.homePage.clickProduct(productName);
    await expect(app.page).toHaveURL(/product/);
  });

  await test.step('Verify product details', async () => {
    await expect(app.productPage.productName).toHaveText(productName);
    await expect(app.productPage.unitPrice).toHaveText('9.17');
  });

  await test.step('Add product to cart', async () => {
    await app.productPage.clickAddToCart();

    await expect(alertMessage).toBeVisible();
    await expect(alertMessage).toHaveText('Product added to shopping cart.');
    await expect(alertMessage).toBeHidden({ timeout: 8000 });

    await expect(app.productPage.header.cartQuantity).toHaveText('1');
  });

  await test.step('Open shopping cart', async () => {
    await app.productPage.clickCartIcon();

    await expect(app.page).toHaveURL('/checkout');
  });

  await test.step('Verify product in the cart', async () => {
    await expect(app.checkoutPage.productQuantity).toHaveValue('1');
    await expect(app.checkoutPage.productTitle).toHaveText(productName);
    await expect(app.checkoutPage.proceedToCheckout).toBeVisible();
  });
});