import { test as base } from '@playwright/test';
import { AllPages } from '../page objects/allPages.page';
import { user } from '../testData/users';

type MyFixtures = {
    app: AllPages;
    loggedInApp: AllPages;
};
type LoginResponse = {
    access_token: string;
};

export const test = base.extend<MyFixtures>({
    app: async ({ page }, use) => {
        const allPages = new AllPages(page);

        await use(allPages);
    },
    loggedInApp: async ({ browser, request }, use) => {
        const context = await browser.newContext();
        const resp = await request.post(
            `${process.env.API_URL}/users/login`,
            {
                data: {
                    email: user.email,
                    password: user.password
                }
            }
        );
        const jsonData = await resp.json() as LoginResponse;
        const token = jsonData.access_token;

        const page = await context.newPage();
        const allPages = new AllPages(page);

        await page.goto('/');

        await page.evaluate((token) => {
            localStorage.setItem('auth-token', token);
        }, token);

        await page.reload();

        await page.goto('/account');

        await use(allPages);
        await context.close();
    }
})