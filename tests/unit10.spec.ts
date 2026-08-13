import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');

    // Fill in credentials
    await page.getByPlaceholder('Your email')
        .fill('customer@practicesoftwaretesting.com');

    await page.getByPlaceholder('Your password')
        .fill('welcome01');

    // Click the Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify URL
    await expect(page)
        .toHaveURL('https://practicesoftwaretesting.com/account');

    // Verify page title
    await expect(
        page.locator('[data-test="page-title"]')
    ).toHaveText('My account');

    // Verify username in the navigation bar
    await expect(
        page.locator('[data-test="nav-menu"]')
    ).toHaveText('Jane Doe');
});