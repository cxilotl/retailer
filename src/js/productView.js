var _               = require('lodash');
var Backbone        = require('backbone');
var productTmpl     = require('../templates/product-template.html');

var ProductView =  Backbone.View.extend({

    tagName: 'div',

    initialize: function() {
        this.productTemplate = _.template( productTmpl );
    },

    render: function() {
        var productContent = this.productTemplate( this.model.toJSON());
        this.$el.html( productContent );
        return this;
    }

});

module.exports = ProductView;