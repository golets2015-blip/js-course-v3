import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');

    // Fill in credentials
    await page.getByPlaceholder('Your email').fill('customer@practicesoftwaretesting.com');

    await page.getByPlaceholder('Your password').fill('welcome01');

    // Click the Login button
    await page.getByRole('button', { name: 'Login' }).click();

    //Check for the page URL to be https://practicesoftwaretesting.com/account
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

    //Check for the page title to be "My Account"
    await expect(page.locator('[data-test="page-title"]')).toHaveText('My account');

    //Check username in the navigation bar to be "Jane Doe"
    await expect(page.locator('[data-test="nav-menu"]')).toHaveText('Jane Doe');
    
})