/**
 * HelloWorldView.js defines the index view (controller)
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/indextemplate.html',
    'js/models/NumberModel'
], function($, _, Backbone, indexTemplate, Number) {
    /*
     * instantiate the view object
     */
    var IndexView = Backbone.View.extend({
        compiledTemplate: _.template(indexTemplate), /* define view template */
        el: $('#app-content'), /* define app's DOM output container */
        
        /**
         * render function displays view
         */
        render: function() {
            this.$el.html(this.compiledTemplate()); /* push template content to DOM */
        },
        
        /**
         * register view events 
         * */
        events: {
          'click #submit':'validate'  
        },
        
        /**
         * checks form input and displays model output
         */
        validate: function() {
            var val = $('#number').val();
            if (Math.floor(val) == val) {
                var isInt = true;
            } else {
                var isInt = false;
            }
            
            if ($.isNumeric(val) && isInt && val >= 0 && val <= 999999999999) {
                var number = new Number;
                var numString = number.getNumString(val);
                $('#output').html("<span class='num'>" + numString + "</span>");
            } else {
                $('#output').html("<span class='error'>Please enter an integer between 0-999999999999</span>");
            }
        }
        
    });
    
    return IndexView; /* return the view object */
});