var Backbone            = require('backbone');
var Product             = require('./product.js');

var ProductCollection =  Backbone.Collection.extend({

    model: Product,

    initialize: function() {

    },

});

module.exports = ProductCollection;