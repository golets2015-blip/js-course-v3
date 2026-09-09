import type { Page, Locator } from '@playwright/test';
import { HeaderFragment } from '../fragments/header.fragment';

export class CheckoutPage {
    page: Page;
    header: HeaderFragment;
    productTitle: Locator;
    productQuantity: Locator;
    productPrice: Locator;
    cartTotal: Locator;
    continueShopping: Locator;
    proceedToCheckout: Locator;
    proceedToCheckout2: Locator;
    proceedToCheckout3: Locator;
    loggedInMessage: Locator;
    countryInput: Locator;
    postalCode: Locator;
    houseNumber: Locator;
    streetName: Locator;
    cityName: Locator;
    stateName: Locator;
    paymentMethod: Locator;
    confirmButton: Locator;
    creditCardNumber: Locator;
    expirationDate: Locator;
    cvvNumber: Locator;
    cardHolderName: Locator;
    successMessage: Locator;

    constructor (page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);
        this.productTitle = page.getByTestId('product-title');
        this.productQuantity = page.getByTestId('product-quantity');
        this.productPrice = page.getByTestId('product-price');
        this.cartTotal = page.getByTestId('cart-total');
        this.continueShopping = page.getByTestId('continue-shopping');
        this.proceedToCheckout = page.getByTestId('proceed-1');
        this.loggedInMessage = page.getByText(/you are already logged in/i);
        this.countryInput = page.getByTestId('country');
        this.postalCode = page.getByTestId('postal_code');
        this.houseNumber = page.getByTestId('house_number');
        this.streetName = page.getByTestId('street');
        this.cityName = page.getByTestId('city');
        this.stateName = page.getByTestId('state');
        this.paymentMethod = page.getByTestId('payment-method');
        this.confirmButton = page.getByTestId('finish');
        this.creditCardNumber = page.getByTestId('credit_card_number');
        this.expirationDate = page.getByTestId('expiration_date');
        this.cvvNumber = page.getByTestId('cvv');
        this.cardHolderName = page.getByTestId('card_holder_name');
        this.successMessage = page.getByText(/Payment was successful/i);
        this.proceedToCheckout2 = page.getByTestId('proceed-2');
        this.proceedToCheckout3 = page.getByTestId('proceed-3');
    }

    async clickProceedToCheckout() {
        await this.proceedToCheckout.click();
    }

    async clickProceedToCheckout2() {
        await this.proceedToCheckout2.click();
    }

    async clickProceedToCheckout3() {
        await this.proceedToCheckout3.click();
    }

    async selectCountry(country: string): Promise<void>{
    await this.countryInput.selectOption({ label : country });
    }

    async insertPostalCode(code: string): Promise<void>{
        await this.postalCode.fill(code)
    }

    async insertHouseNumber(number: string): Promise<void>{
        await this.houseNumber.fill(number);
    }

    async selectPaymentOption(payment: string): Promise<void>{
        await this.paymentMethod.selectOption({ label : payment });
    }

    async insertCardNumber(card: string): Promise<void>{
        await this.creditCardNumber.fill(card);
    }

    async insertExpirationDate(date: string): Promise<void>{
        await this.expirationDate.fill(date);
    }

    async insertCvv(cvv: string): Promise<void>{
        await this.cvvNumber.fill(cvv);
    }

    async insertCardHolder(cardHolder: string): Promise<void>{
        await this.cardHolderName.fill(cardHolder);
    }

    async clickConfirm() {
        await this.confirmButton.click();
    }
}