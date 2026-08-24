import type { Page, Locator } from '@playwright/test';
import { HeaderFragment } from '../fragments/header.fragment';

export class HomePage {
    page: Page;
    header: HeaderFragment;
    productName: Locator;

    constructor (page: Page) {
        this.page = page;
        this.header = new HeaderFragment(page);
        this.productName = page.getByTestId('product-name');
    }

    async clickProduct (productName: string): Promise <void> {
        await this.productName.filter({ hasText: productName }).click();
    }
}