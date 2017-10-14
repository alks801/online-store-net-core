var vue;

function vueWorker() { };

//js working with vue
//Just demonstrating component and binding
vueWorker.init = function () {
    eventWorker.push(bindOrer, 'bind');
    if (model) {
        //Getting tamplate. It could be many templates in one file
        //Just for fun
        $.get("/js/vue_templates/product.html", null, function (html) {
            var sourceHtml = $("<div/>").append(html);
            //product template
            //Sure, I could write template right here for example.
            //Or use binding in Index.cshtnl or don't use Vue lol.
            var productTemplate = sourceHtml.find("script#product-template").html();

            Vue.component('products', {
                template: productTemplate,
                data: function () {
                    return model;
                },
                methods: {
                    order: function (id) {
                        if (!id) return;
                        if (!model.orders) model.orders = [];
                        var product = _.find(model.products, function (p) { return p.id === id; });
                        //It is not optimal. We could do here dictionary
                        // productId : count
                        //But it is an example project.
                        model.orders.push(product);
                        $('.orders-badge').text(model.orders.length);
                        new Noty({
                            text: '<div class ="noty-product-name">' + product.name + '</div> has been added to cart!<br>Total cost: ' + model.ordersSum(),
                            timeout: 3000
                        }).show();
                    }
                }
            });

            vue = new Vue({
                el: "div.body-content",
                //data: model,
                //methods: {
                //    order : function (e) {
                //    
                //    }
                //}
            });

            new Vue({ el: 'nav', data: model });
            eventWorker.delete(bindOrer, 'bind');
        });
    }
};