var productList = require('../src/data/products.json');
var ProductRetrieval = require('../src/js/helpers/productRetrieval');

describe('Given a list of product to be retrieved, the module', function() {

    var productRetrieval;

    beforeEach(function() {
        productRetrieval = new ProductRetrieval();
    });

    test('should get the list of products', function() {

        expect( productRetrieval.getProducts().length ).toEqual( productList.products.length );

    });

});