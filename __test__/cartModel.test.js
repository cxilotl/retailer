var productList         = require('../src/data/products.json');
var Product             = require('../src/js/product.js');
var CartModel           = require('../src/js/cartModel.js');

describe('Given a cart, it', function() {

    var cartModel, products;

    beforeEach(function() {
        products = productList.products;
        cartModel = new CartModel();
    });

    test('should keep a reference to a list of products being added to it', function() {
        expect( cartModel.get('items') ).toEqual( expect.any(Array) );
    });

    test('should allow a product to be added', function() {
        var productItem = new Product( products[3] );
        // Test
        cartModel.addProduct( productItem );
        expect( cartModel.get('items')[0] ).toEqual( productItem );
    });

    test('should indicate when it does not contain any product', function() {
        var hasProducts;
        // Test
        hasProducts = cartModel.hasProducts();
        expect( hasProducts ).toBeFalsy();
    });

    test('should indicate when it contains one product', function() {
        var hasProducts, productItem = new Product( products[3] );
        cartModel.addProduct( productItem );
        // Test
        hasProducts = cartModel.hasProducts();
        expect( hasProducts ).toBeTruthy();
    });

    test('should indicate when it contains one product', function() {
        var hasProducts;
        cartModel.addProduct( new Product( products[3] ) );
        cartModel.addProduct( new Product( products[6] ) );
        // Test
        hasProducts = cartModel.hasProducts();
        expect( hasProducts ).toBeTruthy();
    });

    test('should set the total price to 0 when no product has been added to it', function() {
        var totalPrice;
        // Test
        cartModel.calculateTotalPrice();
        totalPrice = cartModel.get('totalPrice');
        expect( totalPrice ).toEqual( 0 );
    });

    test('should calculate the total price of one added product', function() {
        var productItem = new Product( products[3] ), totalPrice;
        cartModel.addProduct( productItem );
        // Test
        cartModel.calculateTotalPrice();
        totalPrice = cartModel.get('totalPrice');
        expect( totalPrice ).toEqual( productItem.get('price') );
    });

    test('should calculate the total price of more than one added product', function() {
        var productItem1, productItem2, totalPrice;
        productItem1 = new Product( products[3] );
        productItem2 = new Product( products[5] );
        cartModel.addProduct( productItem1 );
        cartModel.addProduct( productItem2 );
        // Test
        cartModel.calculateTotalPrice();
        totalPrice = cartModel.get('totalPrice');
        expect( totalPrice ).toEqual( productItem1.get('price') + productItem2.get('price') );
    });

    test('should return the total price of the only product added', function() {
        var productItem, totalPrice;
        productItem = new Product( products[3] );
        cartModel.addProduct( productItem );
        // Test
        totalPrice = cartModel.getTotalPrice();
        expect( totalPrice ).toEqual( productItem.get('price') );
    });

    test('should return the total price of the all products added', function() {
        var productItem1, productItem2, totalPrice;
        productItem1 = new Product( products[3] );
        productItem2 = new Product( products[5] );
        cartModel.addProduct( productItem1 );
        cartModel.addProduct( productItem2 );
        // Test
        totalPrice = cartModel.getTotalPrice();
        expect( totalPrice ).toEqual( productItem1.get('price') + productItem2.get('price') );
    });

});
