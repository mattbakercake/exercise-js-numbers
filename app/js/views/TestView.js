/**
 * TestsView.js defines the tests view (controller)
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'qunit',
    'js/tests/numberTest',
    'text!templates/testtemplate.html'
], function($, _, Backbone, Qunit, numberTest, testTemplate) {
    /*
     * instantiate the view object
     */
    var TestView = Backbone.View.extend({
        compiledTemplate: _.template(testTemplate), /* define view template */
        el: $('#app-content'), /* define app's DOM output container */
        
        /*
         * render function displays view
         */
        render: function() {
            this.$el.html(this.compiledTemplate()); /* push template content to DOM */
            numberTest.run();
            Qunit.load();
            Qunit.start();
        }   
    });
    
    return TestView; /* return the view object */
});