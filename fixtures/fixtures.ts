import { test as base } from '@playwright/test';
import { AllPages } from '../page objects/allPages.page';

type MyFixtures = {
    app: AllPages;
    loggedInApp:AllPages;
}

export const test = base.extend<MyFixtures>({
    app: async ({ page }, use) => {
        const allPages = new AllPages(page);

        await use(allPages);
    },
    loggedInApp: async ({ browser }, use) => {
        const context = await browser.newContext({
        storageState: 'playwright/.auth/user.json'
    });

    const page = await context.newPage();
    const allPages = new AllPages(page);

    await page.goto('/account');

    await use(allPages);
    await context.close();
    }
})