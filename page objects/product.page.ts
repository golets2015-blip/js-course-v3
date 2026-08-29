import type { Page, Locator } from '@playwright/test';
import { HeaderFragment } from '../fragments/header.fragment';

export class ProductPage {
    page: Page;
    header: HeaderFragment;
    productName: Locator;
    unitPrice: Locator;
    addToCart: Locator;
    addToFavorites: Locator;

    constructor (page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);
        this.productName = page.getByTestId('product-name');
        this.unitPrice = page.getByTestId('unit-price');
        this.addToCart = page.getByTestId('add-to-cart');
        this.addToFavorites = page.getByTestId('add-to-favorites');
    }
    
    async clickAddToCart () {
        await this.page.getByTestId('add-to-cart').click();
    }

    async clickCartIcon () {
        await this.header.cartIcon.click();
    }
}
