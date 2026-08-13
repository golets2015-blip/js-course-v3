import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
    await page.goto('/auth/login');

    // Fill in credentials
    await page.getByPlaceholder('Your email')
        .fill('customer@practicesoftwaretesting.com');

    await page.getByPlaceholder('Your password')
        .fill('welcome01');

    // Click the Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify URL
    await expect(page)
        .toHaveURL('/account');

    // Verify page title
    await expect(
        page.getByTestId('page-title')
    ).toHaveText('My account');

    // Verify username in the navigation bar
    await expect(
        page.getByTestId('nav-menu')
    ).toHaveText('Jane Doe');
});