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

    async clickProduct(productName: string): Promise<void> {
    await this.productName
        .filter({ hasText: productName })
        .first()
        .click();
    }

    async selectSortOption(option: string): Promise<void> {
        await this.sortDropdown.selectOption({ label: option });
    }

    async getProductNames(): Promise<string[]> {
    await this.productName.first().waitFor();

    const names = await this.productName.allTextContents();

    return names.map(name => name.trim());
    }

    async getProductPrice(): Promise<number[]> {
    await this.productPrice.first().waitFor();

    const prices = await this.productPrice.allTextContents();

    return prices.map(price =>
        Number(price.replace('$', '').trim())
    );
    }

    async selectCategory(category: string): Promise<void> {
        await this.page.getByLabel(category).check();
    }
}