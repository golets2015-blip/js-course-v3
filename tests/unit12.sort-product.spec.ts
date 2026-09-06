import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

const sortNameOptions = [
    {
        option: 'Name (A - Z)',
        order: 'ascending',
        sortExpected: (names: string[]) =>
            names.sort((a, b) => a.localeCompare(b))
    },
    {
        option: 'Name (Z - A)',
        order: 'descending',
        sortExpected: (names: string[]) =>
            names.sort((a, b) => b.localeCompare(a))
    }
];

const sortPriceOptions = [
    {
        option: 'Price (High - Low)',
        order: 'descending',
        sortExpected: (price: number[]) =>
            price.sort((a, b) => b - a)
    },
    {
        option: 'Price (Low - High)',
        order: 'ascending',
        sortExpected: (price: number[]) =>
            price.sort((a, b) => a - b)
    }
]

sortNameOptions.forEach(({ option, order, sortExpected }) => {
    test(`Verify user can perform sorting by ${option} ${order}`, async ({ app }) => {
        await app.page.goto('/');

        await app.homePage.selectSortOption(option);

        await expect(async () => {
            const actualNames = await app.homePage.getProductNames();

            const expectedNames = [...actualNames];

            sortExpected(expectedNames);

            expect(actualNames).toEqual(expectedNames);
        }).toPass();
    });
});

sortPriceOptions.forEach(({option, order, sortExpected}) => {
    test(`Verify user can perform sorting by ${option} ${order}`, async ({ app }) => {
        await app.page.goto('/');

        await app.homePage.selectSortOption(option);

        await expect(async () => {
            const actualPrices = await app.homePage.getProductPrice();

            const expectedPrices = [...actualPrices];

            sortExpected(expectedPrices);

            expect(actualPrices).toEqual(expectedPrices);
        }).toPass();
    });
});