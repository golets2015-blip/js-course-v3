import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

test('Verify user can view product details', async ({ app }) => {
    await app.page.goto('/');

    const productName = 'Combination Pliers';

    //Click on the product "Combination Pliers".
    await app.homePage.clickProduct(productName);

    // Verify URL
    await expect(app.page).toHaveURL(/product/);

    //Verify product name
    await expect(app.productPage.productName).toHaveText(productName)

    //Verify product price
    await expect(app.productPage.unitPrice).toHaveText('14.15');

    //Verify "Add to Cart" button is visible.
    await expect(app.productPage.addToCart).toBeVisible();

    //Verify "Add to Favorites" button is visible.
    await expect(app.productPage.addToFavorites).toBeVisible();
})