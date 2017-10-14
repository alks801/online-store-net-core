var vue;

function vueWorker() { };

//js working with vue
vueWorker.init = function () {
    eventWorker.push(bindOrer, 'bind');
    if (model) {
        //Getting tamplate. It could be many templates in one file
        //Just for fun
        $.get("/js/vue_templates/product.html", null, function (html) {
            var sourceHtml = $("<div/>").append(html);
            //product template
            //Sure, I could write template right here for example.
            var productTemplate = sourceHtml.find("script#product-template").html();

            Vue.component('product', {
                template: productTemplate/*,
                props: ['productId'],
                data: function () {
                    var productId = this.productId;
                    var product = _.find(model.products, (p) => { return r.id == productId; });
                    return product;
                }*/
                , data: function () {
                    return model.products;
                }
            });

            vue = new Vue({
                el: "div.body-content",
                data: model

            });
        });
    }
    eventWorker.delete(bindOrer, 'bind');
};