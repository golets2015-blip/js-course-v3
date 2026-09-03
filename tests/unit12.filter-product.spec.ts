import { test, expect } from '@playwright/test';
import { HomePage } from '../page objects/home.page';
import { PowerTools } from '../testData/categories.enum';


test('Verify user can filter products by category', async ({ page }) => {
    await page.goto('/');
    
    const homePage = new HomePage(page);

    await homePage.selectCategory(PowerTools.Sander);

    await expect(async () => {
    const actualNames = await homePage.getProductNames();

    for (const name of actualNames) {
        expect(name).toContain(PowerTools.Sander);
    }
}).toPass();
});