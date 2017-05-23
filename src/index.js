require('./css/main.css');

var AppView = require('./js/AppView');

var appView = new AppView({
    el: '#main_content'
});
appView.render();

