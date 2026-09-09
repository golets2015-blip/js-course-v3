import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

test('Login with valid credentials', async ({ loggedInApp }) => {

    // Verify page title
    await expect(loggedInApp.accountPage.pageTitle).toHaveText('My account');

    // Verify username in the navigation bar
    await expect(loggedInApp.accountPage.header.navMenu).toHaveText('Jack Howe');
});