var _               = require('lodash');
var Backbone        = require('backbone');

var CartModel       = Backbone.Model.extend({

    defaults: {
        items       : [],
        totalPrice  : 0
    },

    initialize: function() {
        this.set({
            items       : [],
            totalPrice  : 0
        });
    },

    addProduct: function(productItem) {
        if (_.isObject(productItem)) {
            this.get('items').push( productItem );
            this.calculateTotalPrice();
            this.trigger('product-added');
        }
    },

    hasProducts: function() {
        var hasProducts = false;
        if (this.get('items').length > 0) {
            hasProducts = true;
        }
        return hasProducts;
    },

    calculateTotalPrice: function() {
        var totalPrice = 0.00;
        if (this.hasProducts()) {
            _.each(this.get('items'), function(product) {
                if (_.isNumber(product.get('price'))) {
                    totalPrice += product.get('price');
                }
            }, this);
        }
        this.set('totalPrice', totalPrice);
    },

    getTotalPrice: function() {
        return this.get('totalPrice');
    },

    getTotalProducts: function() {
        return this.get('items').length;
    }

});

module.exports = CartModel;