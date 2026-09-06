import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { user } from '../testData/users';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test('Verify Login', async({app}) => {
    await app.page.goto('/');

    await app.homePage.header.clickSignIn();

    await app.loginPage.performLogin(user.email, user.password);

    // Verify URL
    await expect(app.page).toHaveURL('/account');

    await app.page.context().storageState({ path: authFile });

})