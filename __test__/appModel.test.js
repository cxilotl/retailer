var productList         = require('../src/data/products.json');
var Product             = require('../src/js/product.js');
var AppModel            = require('../src/js/appModel.js');

describe('Given a cart, it', function() {

    var appModel, products;

    beforeEach(function() {
        products = productList.products;
        appModel = new AppModel();
    });

    test('should set up the list of available products when initialised', function() {
        expect( appModel.getProductList() ).toEqual( expect.any(Object) );
        expect( appModel.getProductList().length ).toEqual( products.length );
        expect( appModel.getProductList().toJSON() ).toEqual( products );
    });

    test('should not add any product to it when no product id is provided', function() {
        // Test
        appModel.addProductToCart();
        expect( appModel.cart.get('items').length ).toEqual( 0 );
    });

    test('should allow the user to add a product to it', function() {
        var productItem, productId;

        productItem = products[2];
        productId = productItem.id;
        // Test
        appModel.addProductToCart( productId );
        expect( appModel.cart.get('items').length ).toEqual( 1 );
        expect( appModel.cart.get('items')[0] instanceof Product ).toBeTruthy();
        expect( appModel.cart.get('items')[0].get('id') ).toEqual( productItem.id );
        expect( appModel.cart.get('items')[0].toJSON() ).toEqual( productItem );
    });

});
