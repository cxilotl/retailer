var _               = require('lodash');
var Backbone        = require('backbone');
var productListTmpl   = require('../templates/product-list-template.html');
var ProductView     = require('./productView');

var ProductCollectionView =  Backbone.View.extend({

    initialize: function() {
        this.productListTemplate = _.template( productListTmpl );
    },

    render: function() {
        this.$el.html( this.productListTemplate() );
        this.renderProductList();
        return this;
    },

    renderProductList: function() {
        var $productListHook, content = [];
        if (_.isObject(this.collection) && this.collection.length > 0) {
            $productListHook = this.$el.find('.js-product-list');
            console.log( $productListHook.html() );
            this.collection.each(function (productItem) {
                var prodView = this.renderProduct( productItem );
                content.push( prodView );
            }, this);
            if (content && content.length > 0) {
                $productListHook.html( content );
            }
        }
    },

    renderProduct: function(productItem) {
        var productView;
        if (_.isObject(productItem)) {
            productView = new ProductView({
                model: productItem
            });
            return productView.render().$el.html();
        }
    }


});

module.exports = ProductCollectionView;