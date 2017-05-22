var _                   = require('lodash');
var Backbone            = require('backbone');
var CartModel           = require('./cartModel.js');
var ProductRetrieval    = require('./helpers/productRetrieval.js');
var ProductCollection   = require('./productCollection.js');

var productListData;

var AppModel =  Backbone.Model.extend({

    initialize: function() {
        var productList;
        this.cart = new CartModel();
        productListData     = new ProductRetrieval();
        productList = productListData.getProducts();
        this.productList = new ProductCollection( productList );
    },

    getProductList: function() {
        return this.productList;
    },

    addProductToCart: function(productId) {
        var productItem;
        if (_.isObject(this.cart) && _.isNumber(productId) && !_.isNaN(productId)) {
            productItem = this.productList.find(function(product) {
                return productId === product.get('id');
            }, this);
            if (_.isObject(productItem)) {
                this.cart.addProduct( productItem );
            }
        }
    },

});

module.exports = AppModel;