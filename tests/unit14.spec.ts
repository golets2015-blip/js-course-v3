/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

test('Verify 20 products on page', async ({ app }) => {

  await app.page.route(
    'https://api.practicesoftwaretesting.com/products*',
    async (route) => {

      const response = await route.fetch();
      const json = await response.json();

      json.data = json.data.concat(
        json.data,
        json.data.slice(0, 2)
      );

      await route.fulfill({ response, json });
    }
  );

  await app.page.goto('/');

  await expect(
    app.page.locator('a[data-test^="product"]')
  ).toHaveCount(20);
});