var _               = require('lodash');
var Backbone        = require('backbone');
var cartTmpl        = require('../templates/cart-template.html');

var CartView =  Backbone.View.extend({

    initialize: function() {
        this.cartTemplate = _.template( cartTmpl );
        if (_.isObject(this.model)) {
            this.listenTo(this.model, 'product-added', this.updateProductNumber, this);
            this.listenTo(this.model, 'change:totalPrice', this.updateTotalPrice, this);
        }
    },

    render: function() {
        var numOfProducts, totalPrice;
        if (_.isObject(this.model)) {
            numOfProducts = this.model.get('items').length;
            totalPrice = this.model.getTotalPrice();
            this.$el.html(this.cartTemplate({
                numOfProducts   : numOfProducts,
                totalPrice      : totalPrice
            }));
        }
        return this;
    },

    updateTotalPrice: function() {
        var totalPrice = 0, $totalPrice;
        $totalPrice = this.$el.find('.js-cart-item-total-price');
        if ($totalPrice && $totalPrice.length > 0) {
            if (this.model.hasProducts()) {
                totalPrice = this.model.getTotalPrice();
            }
            $totalPrice.html( totalPrice );
        }
    },

    updateProductNumber: function() {
        var numOfProducts = 0, $numOfProducts;
        $numOfProducts = this.$el.find('.js-cart-item-product-num');
        if ($numOfProducts && $numOfProducts.length > 0) {
            if (this.model.hasProducts()) {
                numOfProducts = this.model.getTotalProducts();
                $numOfProducts.html( numOfProducts );
            }
        }
    }

});

module.exports = CartView;
