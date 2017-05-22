require('./css/main.css');

// var $ = require('jquery');
var AppView = require('./js/AppView');

// $('#main-content').html( new AppView.render().$el );
var appView = new AppView({
    el: '#main_content'
});
appView.render();

