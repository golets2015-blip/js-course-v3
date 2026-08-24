import type { Page, Locator } from '@playwright/test';

export class HeaderFragment {
    page: Page;
    homeButton: Locator;
    categoryButton: Locator;
    contactButton: Locator;
    signInButton: Locator;
    languageSelector: Locator;
    navMenu: Locator;

    constructor (page: Page) {
        this.page = page;
        this.homeButton = page.getByTestId('nav-home');
        this.categoryButton = page.getByTestId('nav-categories');
        this.contactButton = page.getByTestId('nav-contact');
        this.signInButton = page.getByTestId('nav-sign-in');
        this.languageSelector = page.getByTestId('language-select');
        this.navMenu = page.getByTestId('nav-menu');
    }

    async clickSignIn (): Promise <void> {
        await this.signInButton.click();
    }
}