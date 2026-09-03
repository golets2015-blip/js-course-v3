import type { Page, Locator } from '@playwright/test';
import { HeaderFragment } from '../fragments/header.fragment';

export class HomePage {
    page: Page;
    header: HeaderFragment;
    productName: Locator;
    sortDropdown: Locator;
    productPrice: Locator;

    constructor (page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);
        this.productName = page.getByTestId('product-name');
        this.sortDropdown = page.getByTestId('sort');
        this.productPrice = page.getByTestId('product-price');
    }

    async clickProduct (productName: string): Promise <void> {
        await this.productName.filter({ hasText: productName }).click();
    }

    async selectSortOption(option: string): Promise<void> {
        await this.sortDropdown.selectOption({ label: option });
    }

    async getProductNames(): Promise<string[]> {
        return await this.productName.allTextContents();
    }

    async getProductPrice(): Promise<number[]> {
        const prices = await this.productPrice.allTextContents();
        return prices.map(price => Number(price));
    }

    async selectCategory(category: string): Promise<void> {
        await this.page.getByLabel(category).check();
    }

}