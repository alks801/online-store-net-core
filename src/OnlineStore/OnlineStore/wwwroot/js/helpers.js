function helpers () {};

helpers.getProductById = function (id) {
    return _.find(model.products, function (p) { return p.id === id; });
};

helpers.updateCountInCart = function (product) {
    if (!product) return;
    product.countInCart = _.filter(model.cartProducts, (p) => { return p.id === product.id }).length;
    $('.orders-badge').text(model.cartProducts.length);
};

helpers.getCartSum = function () {
    if (!model.cartProducts)
        return 0;
    return _.sumBy(model.cartProducts, (p) => { return p.cost });
};

helpers.saveCartProducts = function (redirectToCartNeed) {
    sessionStorage.cartProducts = JSON.stringify(model.cartProducts);
    if (redirectToCartNeed) location.href = location.origin + "/cart";
}