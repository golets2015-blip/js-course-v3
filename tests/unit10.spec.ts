import { test, expect } from '@playwright/test';
import { AccountPage } from '../page objects/account.page';

test('Login with valid credentials', async ({ page }) => {
    await page.goto('/account');

    const accountPage = new AccountPage(page);

    // Verify page title
    await expect(accountPage.pageTitle).toHaveText('My account');

    // Verify username in the navigation bar
    await expect(accountPage.header.navMenu).toHaveText('Jane Doe');
});