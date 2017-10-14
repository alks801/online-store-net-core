var preBindOrer = { 0: "preBind", 1: [] };
var bindOrer = { 0: "bind", 1: [] };
var postBindOrer = { 0: "postBind", 1: [] };

//There is used custom order manager with 3 main event points: preBind, bind, postBind; 
//It is for stop using many callbacks everywhere

function eventWorker() {
    $(document).on('preBind', function (event) {
        console.log('preBind');
        eventWorker.push(bindOrer, 'afterPreBind');
        eventWorker.bind();
        eventWorker.delete(bindOrer, 'afterPreBind');
    });

    $(document).on('bind', function (event) {
        console.log('bind');
        eventWorker.push(postBindOrer, 'afterbind');
        eventWorker.postBind();
        eventWorker.delete(postBindOrer, 'afterbind');
    });

    $(document).on('postBind', function (event) {
        console.log('postBind');
        //After All remove loader and show page for user
        page.removeLoader();
    });
};

//Prebind things. Place here functions that will modify some elements Before Vue binding
eventWorker.preBind = function () {
    eventWorker.push(preBindOrer, 'preBind');
    page.setLoader();
    page.getModel();
    //After dom and pictures loading
    $(window).load(function () {
        //It will trigger line #9 if all order will be empty
        eventWorker.delete(preBindOrer, 'preBind');
    });
}

//Bind things
eventWorker.bind = function () {
    eventWorker.push(bindOrer, 'bind');
    vueWorker.init();
    //It will trigger line #16 if all order will be empty
    eventWorker.delete(bindOrer, 'bind');
}

//Postbind things. Place here functions that will modify some elements, etc. 
//Here we can modify Vue model. It have binded already
eventWorker.postBind = function () {
    eventWorker.push(postBindOrer, 'postBind');

    //It will trigger line #16
    eventWorker.delete(postBindOrer, 'postBind');
}

//Custom push and delete orderEvents functions
eventWorker.push = function (stack, el) {
    stack[1].push(el);
}

//Will trigger if all events in order will be done
eventWorker.delete = function (stack, el) {
    var i = stack[1].indexOf(el);
    if (i != -1) {
        stack[1].splice(i, 1);
        if (stack[1].length === 0) {
            $(document).trigger(stack[0]);
        }
    }
}