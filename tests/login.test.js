const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');

test('Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
