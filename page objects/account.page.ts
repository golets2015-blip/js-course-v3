import type { Page, Locator } from '@playwright/test';
import { HeaderFragment } from '../fragments/header.fragment';


export class AccountPage {
    page: Page;
    pageTitle: Locator;
    header: HeaderFragment;

    constructor (page: Page) {
        this.page = page;
        this.pageTitle = page.getByTestId('page-title');
        this.header = new HeaderFragment(page);
    }
}