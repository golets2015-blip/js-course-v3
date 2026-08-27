import type { Page, Locator } from '@playwright/test';
import { HeaderFragment } from '../fragments/header.fragment';

export class LoginPage {
    page: Page;
    emailField: Locator;
    passwordField: Locator;
    loginButton: Locator;
    header: HeaderFragment;

    constructor (page: Page) {
        this.page = page;
        this.emailField = this.page.getByPlaceholder('Your email');
        this.passwordField = this.page.getByPlaceholder('Your password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' })
        this.header = new HeaderFragment(page);
    }
    async performLogin (email: string, password: string): Promise <void> {
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}