define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var AppController = {
        currentView: null,
        home: function() {
            console.log("rendering homeview");
            var self = this;
            require(['views/homeView'], function(HomeView) {
            	var view = new HomeView();
            	self.renderView.call(self, view);
            });
        },
        about: function() {
            console.log("rendering aboutview");
            var self = this;
            require(['views/aboutView'], function(AboutView) {
	            var view = new AboutView();
	            self.renderView.call(self, view);
            });
        },
        renderView: function(view) {
            this.currentView && this.currentView.remove();
            $('#main').html(view.render().el);
            this.currentView = view;
        }
    };
    return AppController;
});