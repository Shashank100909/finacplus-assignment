const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { ProductsPage } = require('../pageObjects/ProductsPage');
const { CartPage } = require('../pageObjects/CartPage');
const fs = require('fs'); 

test.describe("Add to cart test", () => {
    test.beforeEach(async ({ page }) => {
        console.log("Setting up cart test")
    })

    test("user can login and add product to cart", async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

        const productDetails = await productsPage.getProductDetails();
        await productsPage.addFirstProductToCart()

        await productsPage.goToCart()
        await expect(page).toHaveURL("https://www.saucedemo.com/cart.html")

        const isProductInCart = await cartPage.verifyProductInCart(productDetails.name);
        expect(isProductInCart).toBeTruthy();
        console.log('✅ Product successfully added to cart!');

        const filePath = './cart_product.txt';
        fs.writeFileSync(filePath, `Product Name: ${productDetails.name}\nPrice: ${productDetails.price}`);
        console.log(`📁 Product details saved to ${filePath}`);

        await page.locator('#react-burger-menu-btn').click();
        await page.locator('#logout_sidebar_link').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
        console.log('✅ Logout successful');
    })

    test.afterEach(async ({ page }) => {
        console.log('🔹 Cleaning up test');
        await page.close();
    })
})