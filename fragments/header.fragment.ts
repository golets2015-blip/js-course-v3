import type { Page, Locator } from '@playwright/test';

export class HeaderFragment {
    page: Page;
    homeButton: Locator;
    categoryButton: Locator;
    contactButton: Locator;
    signInButton: Locator;
    languageSelector: Locator;
    navMenu: Locator;
    cartIcon: Locator;
    cartQuantity: Locator;

    constructor (page: Page) {
        this.page = page;
        this.homeButton = page.getByTestId('nav-home');
        this.categoryButton = page.getByTestId('nav-categories');
        this.contactButton = page.getByTestId('nav-contact');
        this.signInButton = page.getByTestId('nav-sign-in');
        this.languageSelector = page.getByTestId('language-select');
        this.navMenu = page.getByTestId('nav-menu');
        this.cartIcon = page.getByTestId('nav-cart');
        this.cartQuantity = page.getByTestId('cart-quantity');
    }

    async clickSignIn (): Promise <void> {
        await this.signInButton.click();
    }
}