var $               = require('jquery');
var _               = require('lodash');
// var Backbone        = require('backbone');
// var structureTmpl   = require('../src/templates/structure.html');
// var AppView         = require('../src/js/AppView.js');

describe.skip('Given a view module that represents the retail page, it', function() {

    var $fixture, appView;

    beforeEach(function() {

        // $fixture = $('<div id="main-content"></div>');
        appView = new AppView({
            // $el: $fixture
        });

    });

    test('should render the list of products', function() {

        var expectedContent;

        // expectedContent = _.template( structureTmpl, { 'title': 'Clothing Retailer' });

        // console.log( expectedContent );
        // console.log(appView.render.$el.html());

        expect( appView.render.$el.html() ).toEqual( jasmine.any(String) );

    });

});
