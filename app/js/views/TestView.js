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
    
    /* define view */
    var TestView = Backbone.View.extend({
        compiledTemplate: _.template(testTemplate), /* compile view template */
        el: $('#app-content'), /* DOM output container */
        
        /**
         * render function displays view
         */
        render: function() {
            this.$el.html(this.compiledTemplate()); /* push template content to DOM */
            
            /* run unit tests */
            numberTest.run();
            Qunit.load();
            Qunit.start();
        }   
    });
    
    return TestView; /* return the view object */
});