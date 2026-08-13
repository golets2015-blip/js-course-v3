import { test } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  // Open login page
  await page.goto('https://practicesoftwaretesting.com/auth/login');

  // Fill in credentials
  await page
    .getByPlaceholder('Your email')
    .fill('customer@practicesoftwaretesting.com');

  await page
    .getByPlaceholder('Your password')
    .fill('welcome01');

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Give the frontend a moment to process the successful login
  await page.waitForTimeout(2000);

  // Debug information for GitHub Actions
  console.log('URL AFTER LOGIN:', page.url());

  const localStorageData = await page.evaluate(() => {
    return Object.fromEntries(Object.entries(window.localStorage));
  });

  console.log('LOCAL STORAGE KEYS:', Object.keys(localStorageData));

  console.log(
    'PAGE CONTENT:',
    await page.locator('body').innerText()
  );
});