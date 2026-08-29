import { test, expect } from '@playwright/test';
import { HomePage } from '../page objects/home.page';
import { ProductPage } from '../page objects/product.page';
import { CheckoutPage } from '../page objects/checkout.page';

test('Verify user can add product to cart', async ({page}) => {
    await page.goto('/');

    const homePage = new HomePage(page);

    const productPage = new ProductPage(page);

    const checkoutPage = new CheckoutPage(page);

    const productName = 'Slip Joint Pliers';

    const alertMessage = page.getByRole('alert');

    //Click on the product "Slip Joint Pliers".
    await homePage.clickProduct(productName);

    //Verify URL contains https://practicesoftwaretesting.com/product.
    await expect(page).toHaveURL(/product/);

    //Verify product name is "Slip Joint Pliers"
    await expect(productPage.productName).toHaveText(productName);

    //Verify product price is 9.17
    await expect(productPage.unitPrice).toHaveText('9.17');

    //Click "Add to Cart" button
    await productPage.clickAddToCart();

    //Verify alert message is visible
    await expect(alertMessage).toBeVisible();
    
    //Verify alert message text is "Product added to shopping cart"
    await expect(alertMessage).toHaveText('Product added to shopping cart.');

    //Verify alert disappears in 8 seconds.
    await expect(alertMessage).toBeHidden({ timeout: 8000 });

    //Verify cart icon in navigation shows quantity = 1
    await expect(productPage.header.cartQuantity).toHaveText('1');

    //Click on the cart icon in the navigation
    await productPage.clickCartIcon();

    //Verify URL is https://practicesoftwaretesting.com/checkout.
    await expect(page).toHaveURL('/checkout');

    //Verify the number of products in the cart table equals 1
    await expect(checkoutPage.productQuantity).toHaveValue('1');

    //Verify product title in the cart is "Slip Joint Pliers"
    await expect(checkoutPage.productTitle).toHaveText(productName);

    //Verify "Proceed to Checkout" button is visible
    await expect(checkoutPage.proceedToCheckout).toBeVisible();
})