import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { creditCard } from '../testData/credit.card';

test('Purchase a product', async ({ loggedInApp }) => {
    await loggedInApp.page.goto('/');

    const productNames = await loggedInApp.homePage.getProductNames();
    const productPrices = await loggedInApp.homePage.getProductPrice()

    const productName = productNames[0];
    const productPrice = productPrices[0];

    await loggedInApp.homePage.clickProduct(productName);

    await loggedInApp.productPage.clickAddToCart();

    await expect(loggedInApp.basePage.alertMessage).toBeVisible();

    await expect(loggedInApp.basePage.alertMessage).toHaveText('Product added to shopping cart.');

    await expect(loggedInApp.productPage.header.cartQuantity).toHaveText('1');

    await loggedInApp.productPage.clickCartIcon();

    await expect(loggedInApp.page).toHaveURL('/checkout');

    await expect(loggedInApp.checkoutPage.productQuantity).toHaveValue('1');

    await expect(loggedInApp.checkoutPage.productTitle).toHaveText(productName);

    await expect (loggedInApp.checkoutPage.productPrice).toHaveText(`$${productPrice}`);

    await expect (loggedInApp.checkoutPage.cartTotal).toHaveText(`$${productPrice}`);

    await loggedInApp.checkoutPage.clickProceedToCheckout();

    await expect (loggedInApp.checkoutPage.loggedInMessage).toBeVisible();

    await loggedInApp.checkoutPage.clickProceedToCheckout2();

    const country = 'United States of America (the)';

    await loggedInApp.checkoutPage.selectCountry(country);

    const code = '12345';

    await loggedInApp.checkoutPage.insertPostalCode(code);

    const houseNumber = '26';

    await loggedInApp.checkoutPage.insertHouseNumber(houseNumber);

    await expect (loggedInApp.checkoutPage.streetName).not.toHaveValue('');

    await expect (loggedInApp.checkoutPage.cityName).not.toHaveValue('');

    await expect (loggedInApp.checkoutPage.stateName).not.toHaveValue('');

    await loggedInApp.checkoutPage.clickProceedToCheckout3();

    const paymentOption = 'Credit Card';

    await loggedInApp.checkoutPage.selectPaymentOption(paymentOption);

    await loggedInApp.checkoutPage.insertCardNumber(creditCard.creditCard);

    await loggedInApp.checkoutPage.insertExpirationDate(creditCard. expirationDate);

    await loggedInApp.checkoutPage.insertCvv(creditCard.cvvNumber);

    await loggedInApp.checkoutPage.insertCardHolder(creditCard.cardHolder);

    await loggedInApp.checkoutPage.clickConfirm();

    await expect (loggedInApp.checkoutPage.successMessage).toBeVisible();
});