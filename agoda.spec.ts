import { test, expect } from '@playwright/test';
import { AgodaHomePage } from './agoda-home-page';

test('my test', async ({ page }) => {
        const agodaHomePage = new AgodaHomePage(page)
        await agodaHomePage.goto();
        await agodaHomePage.selectHotelsAndHomes('Jakarta');
        await agodaHomePage.selectPrivateStay();
        await agodaHomePage.selectPackage();
        await agodaHomePage.selectFlight();
});
    



