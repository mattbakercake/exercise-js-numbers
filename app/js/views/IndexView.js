/**
 * HelloWorldView.js defines the index view (controller)
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/indextemplate.html'
], function($, _, Backbone, indexTemplate) {
    /*
     * instantiate the view object
     */
    var IndexView = Backbone.View.extend({
        compiledTemplate: _.template(indexTemplate), /* define view template */
        el: $('#app-content'), /* define app's DOM output container */
        
        /*
         * render function displays view
         */
        render: function() {
            this.$el.html(this.compiledTemplate()); /* push template content to DOM */
        }   
    });
    
    return IndexView; /* return the view object */
});