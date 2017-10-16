function notyWorker() { };

notyWorker.addToCartInfo = function (product) {
    new Noty({
        text: '<div class ="noty-product-name">' + product.name + '</div> has been added to cart!<br>Total cost: $' + helpers.getCartSum(),
        type: 'info',
        theme: 'productaddtocart',
        timeout: 3000
    }).show();
};

notyWorker.deletoFromCartInfo = function (product) {
    new Noty({
        text: '<div class ="noty-product-name">' + product.name + '</div> has been removed from cart!<br>Total cost: $' + helpers.getCartSum(),
        type: 'info',
        theme: 'productcancel',
        timeout: 3000
    }).show();
};