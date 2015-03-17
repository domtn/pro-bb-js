define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var HomeView = Backbone.View.extend({
        tagName: "div",
        template: _.template($('#home-template').html()),
        render: function() {
            this.$el.html(this.template({}));
            return this;
        }
    });
    return HomeView;
});