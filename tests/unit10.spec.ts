import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { USER_NAME } from '../config/baseConfig';

test('Login with valid credentials', {
  tag: '@smoke',
}, async ({ loggedInApp }) => {

    // Verify page title
  await test.step('Verify account page title', async () => {
    await expect(loggedInApp.accountPage.pageTitle).toHaveText('My account');
  });

    // Verify username in the navigation bar
  await test.step('Verify username in the navigation bar', async () => {
    await expect(loggedInApp.accountPage.header.navMenu).toHaveText(USER_NAME);
  });
});