class ProductsPage {
    constructor(page) {
        this.page = page;
        this.firstProduct = page.locator('.inventory_item').first();
        this.productName = this.firstProduct.locator('.inventory_item_name');
        this.productPrice = this.firstProduct.locator('.inventory_item_price');
        this.addToCartButton = this.firstProduct.locator('button');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async getProductDetails() {
        return {
            name: await this.productName.innerText(),
            price: await this.productPrice.innerText(),
        };
    }

    async addFirstProductToCart() {
        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

module.exports = { ProductsPage };