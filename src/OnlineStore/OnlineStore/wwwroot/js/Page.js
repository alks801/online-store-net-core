var model;

//Js, working with Page's elements

function page() { };

page.init = function () {
    eventWorker();
    eventWorker.preBind();

    $('.orders-badge').on('click', function () {
        helpers.saveCartProducts(true);
    });
};

page.getModel = async function () {
    eventWorker.push(preBindOrer, 'getModel');
    $.ajax({
        url: '/getModel',
        type: "POST",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: function (data) {
            model = {};
            model.products = {};
            model.products = data;

            //For vue binding.
            _.forEach(model.products, (p) => { p.countInCart = 0; });
            model.cartProducts = [];
            eventWorker.delete(preBindOrer, 'getModel');
        },
        error: function (jqxhr, status, errorMsg) {
        }
    });
}

page.setLoader = function () {

};

page.removeLoader = function () {

};

page.init();