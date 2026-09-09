import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { PowerTools } from '../testData/categories.enum';


test('Verify user can filter products by category', async ({ app }) => {
    await app.page.goto('/');

    await app.homePage.selectCategory(PowerTools.Sander);

    await expect(async () => {
    const actualNames = await app.homePage.getProductNames();

    for (const name of actualNames) {
        expect(name).toContain(PowerTools.Sander);
    }
}).toPass();
});