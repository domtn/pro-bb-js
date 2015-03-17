define(['jquery', 'underscore', 'backbone', 'components/appController'], function($, _, Backbone, AppController) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "home",
            "about": "about"
        },
        initialize: function() {
            var routeName;
            for (var route in this.routes) {
                routeName = this.routes[route];
                this.route(route, routeName, $.proxy(AppController[routeName], AppController));
            }
        },
        start: function() {
        	Backbone.history.start();
        }
    });
    return new AppRouter();
});