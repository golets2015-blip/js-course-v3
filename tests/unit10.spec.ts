import { test, expect } from '@playwright/test';
import { LoginPage } from '../page objects/login.page';
import { AccountPage } from '../page objects/account.page';
import { HomePage } from '../page objects/home.page';

test('Login with valid credentials', async ({ page }) => {
    await page.goto('/');

    const homePage = new HomePage(page);

    const loginPage = new LoginPage(page);

    const accountPage = new AccountPage(page);

    // Go to "Login" page
    await homePage.header.clickSignIn();

    // Fill in credentials and click login button
    await loginPage.performLogin('customer@practicesoftwaretesting.com', 'welcome01');

    // Verify URL
    await expect(page)
        .toHaveURL('/account');

    // Verify page title
    await expect(accountPage.pageTitle).toHaveText('My account');

    // Verify username in the navigation bar
    await expect(accountPage.header.navMenu).toHaveText('Jane Doe');
});