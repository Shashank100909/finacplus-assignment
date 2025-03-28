class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItem = page.locator('.cart_item');
        this.cartItemName = this.cartItem.locator('.inventory_item_name');
    }

    async verifyProductInCart(expectedProductName) {
        const actualProductName = await this.cartItemName.innerText();
        return actualProductName === expectedProductName;
    }
}

module.exports = { CartPage };
