import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

test('Verify user can add product to cart', async ({app}) => {
    await app.page.goto('/');

    const productName = 'Slip Joint Pliers';

    const alertMessage = app.basePage.alertMessage;

    //Click on the product "Slip Joint Pliers".
    await app.homePage.clickProduct(productName);

    //Verify URL contains https://practicesoftwaretesting.com/product.
    await expect(app.page).toHaveURL(/product/);

    //Verify product name is "Slip Joint Pliers"
    await expect(app.productPage.productName).toHaveText(productName);

    //Verify product price is 9.17
    await expect(app.productPage.unitPrice).toHaveText('9.17');

    //Click "Add to Cart" button
    await app.productPage.clickAddToCart();

    //Verify alert message is visible
    await expect(alertMessage).toBeVisible();
    
    //Verify alert message text is "Product added to shopping cart"
    await expect(alertMessage).toHaveText('Product added to shopping cart.');

    //Verify alert disappears in 8 seconds.
    await expect(alertMessage).toBeHidden({ timeout: 8000 });

    //Verify cart icon in navigation shows quantity = 1
    await expect(app.productPage.header.cartQuantity).toHaveText('1');

    //Click on the cart icon in the navigation
    await app.productPage.clickCartIcon();

    //Verify URL is https://practicesoftwaretesting.com/checkout.
    await expect(app.page).toHaveURL('/checkout');

    //Verify the number of products in the cart table equals 1
    await expect(app.checkoutPage.productQuantity).toHaveValue('1');

    //Verify product title in the cart is "Slip Joint Pliers"
    await expect(app.checkoutPage.productTitle).toHaveText(productName);

    //Verify "Proceed to Checkout" button is visible
    await expect(app.checkoutPage.proceedToCheckout).toBeVisible();
})