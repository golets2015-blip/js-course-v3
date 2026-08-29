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

    constructor (page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);
        this.productTitle = page.getByTestId('product-title');
        this.productQuantity = page.getByTestId('product-quantity');
        this.productPrice = page.getByTestId('product-price');
        this.cartTotal = page.getByTestId('cart-total');
        this.continueShopping = page.getByTestId('continue-shopping');
        this.proceedToCheckout = page.getByTestId('proceed-1');
    }
}