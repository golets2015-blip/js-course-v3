import { test, expect } from '@playwright/test';
import { HomePage } from '../page objects/home.page';
import { ProductPage } from '../page objects/product.page';

test('Verify user can view product details', async ({ page }) => {
    await page.goto('/');

    const homePage = new HomePage(page);

    const productPage = new ProductPage(page);

    //Click on the product "Combination Pliers".
    await homePage.clickProduct();

    // Verify URL
    await expect(page).toHaveURL(/product/);

    //Verify product name
    await expect(productPage.productName).toHaveText('Combination Pliers')

    //Verify product price
    await expect(productPage.unitPrice).toHaveText('14.15');

    //Verify "Add to Cart" button is visible.
    await expect(productPage.addToCart).toBeVisible();

    //Verify "Add to Favorites" button is visible.
    await expect(productPage.addToFavorites).toBeVisible();

})