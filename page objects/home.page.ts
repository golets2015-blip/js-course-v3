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

    async clickProduct (): Promise <void> {
        await this.productName.filter({ hasText: 'Combination Pliers' }).click();
    }
}