var Backbone            = require('backbone');

var Product =  Backbone.Model.extend({

    defaults: {
        'id'        : 0,
        'name'      : '',
        'gender'    : '',
        'colour'    : '',
        'category'  : '',
        'currency'  : '',
        'price'     : 0,
        'discount'  : 0,
        'quantity'  : 0
    },

    initialize: function() {

    },


});

module.exports = Product;