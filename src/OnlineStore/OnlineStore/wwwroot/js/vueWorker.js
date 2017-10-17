var vue;

function vueWorker() { };

//js working with vue
//Just demonstrating component and binding
vueWorker.init = function () {
    eventWorker.push(bindOrer, 'bind');
    if (model) {
        //Getting tamplate. It could be many templates in one file
        //Just for fun
        $.get("/js/vue_templates/templates.html", null, function (html) {
            var sourceHtml = $("<div/>").append(html);
            //product template
            //Sure, I could write template right here for example.
            //Or use binding in Index.cshtnl or don't use Vue lol.
            var productTemplate = sourceHtml.find("script#product-template").html();
            var cartTemplate = sourceHtml.find("script#cart-template").html();

            Vue.component('products', {
                template: productTemplate,
                data: function () {
                    return model;
                },
                props: ['productId'],
                methods: {
                    moveToCart: function (id) {
                        if (!id) return;
                        var product = helpers.getProductById(id);

                        //It is not optimal. We could do here dictionary
                        // productId : count
                        //But it is an example project.
                        model.cartProducts.push(product);

                        helpers.updateCountInCart(product);
                        notyWorker.addToCartInfo(product);
                    },
                    deleteFromCart: function (id) {
                        if (!id) return;
                        var product = helpers.getProductById(id);
                        var index = _.findIndex(model.cartProducts, (p) => { return p.id == product.id });
                        if (index != -1)
                            model.cartProducts.splice(index, 1);
                        helpers.updateCountInCart(product);
                        notyWorker.deletoFromCartInfo(product);
                    }
                },
                /*computed: {
                    countProductInOrders: {
                        cache: false,
                        get: function () {
                            return Date.now();
                            if (!this.productId) return 0;
                            return _.filter(model.cartProducts, (p) => { return p.id === productId }).length;
                        }
                    }
                }*/
            });

            Vue.component('cart', {
                template: cartTemplate,
                data: function () {
                    model.cartProducts= JSON.parse(sessionStorage.cartProducts);
                    return model;
                },
                computed: {
                    totalCost: function () {
                        return helpers.getCartSum();
                    }
                }
            });

            vue = new Vue({
                el: "div.body-content",
                data: model
            });

            eventWorker.delete(bindOrer, 'bind');
        });
    }
};