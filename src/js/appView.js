// var $ = require('jquery');
var _                       = require('lodash');
var Backbone                = require('backbone');
var structureTmpl           = require('../templates/structure.html');
var ProductCollectionView   = require('./productCollectionView.js');
var CartView                = require('./cartView.js');
var AppModel                = require('./appModel.js');

var AppView =  Backbone.View.extend({

    events: {
        'click .js-product-list .js-product-item': 'addProductToCart'
    },

    initialize: function() {
        this.mainTemplate = _.template( structureTmpl );
        this.model = new AppModel();
        this.cartView = null;
    },

    render: function() {
        this.$el.html( this.mainTemplate({
            'title': 'Clothing Retailer'
        }) );
        this.renderCart();
        this.renderProductList();
        return this;
    },

    renderCart: function() {
        if (this.model.cart) {
            this.cartView = new CartView({
                el      : '.header__cart',
                model   : this.model.cart
            });
            this.cartView.render();
        }
    },

    renderProductList: function() {
        var productListView;
        productListView = new ProductCollectionView({
            el         : '.main',
            collection  : this.model.getProductList()
        });
        productListView.render();
    },

    addProductToCart: function(clickEvent) {
        var productId;
        if (_.isObject(clickEvent)) {
            clickEvent.preventDefault();
            productId = clickEvent.currentTarget.getAttribute('data-id');
            if (typeof productId === 'string') { productId = parseInt(productId, 10); }
            if (typeof productId === 'number' && !isNaN(productId)) {
                this.model.addProductToCart( productId );
            }
        }
    }

});

module.exports = AppView;
