import { test, expect } from '@playwright/test';
import { HomePage } from '../page objects/home.page';
import { LoginPage } from '../page objects/login.page';
import { user } from '../testData/users'
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test('Verify Login', async({page}) => {
    await page.goto('/');

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    // Go to "Login" page
    await homePage.header.clickSignIn();

    // Fill in credentials and click login button
    await loginPage.performLogin(user.email, user.password);

    // Verify URL
    await expect(page).toHaveURL('/account');

    await page.context().storageState({ path: authFile });

})