var productList = require('../../data/products.json');

var ProductRetrival = function() {

    var getProducts = function() {
        return productList.products;
    };

    return {
        getProducts: getProducts
    };
};

module.exports = ProductRetrival;