define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    var AboutView = Backbone.View.extend({
        tagName: "div",
        template: _.template($('#about-template').html()),
        render: function() {
            this.$el.html(this.template({}));
            return this;
        }
    });
    return AboutView;
});