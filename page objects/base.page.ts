import { Page, Locator } from '@playwright/test';

export class BasePage {
    readonly alertMessage: Locator;

    constructor(page: Page) {
        this.alertMessage = page.getByRole('alert');
    }
}