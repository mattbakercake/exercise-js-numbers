/**
 * router.js initialises the backbone.js router
 * to resolve requests
 */
define([
    'jquery',
    'backbone',
    'js/views/IndexView',
    'js/views/TestView'
], function($, Backbone, IndexView, TestView) {   
    /**
     * Define routes using :params and *splats if necessary
     * 'URL': 'function' e.g. 'user/:1': 'getUser' 
     */
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showHelloWorld',
            'tests': 'showTests'
        }  
    });
    
    /*
     * initialise view from requested route
     */
    var initialize = function() {
        
        var route = new AppRouter;

        route.on('route:showHelloWorld', function(){
           var indexView = new IndexView();
           indexView.render();
        });
        
        route.on('route:showTests', function(){
           var testView = new TestView();
           testView.render();
        });
        
        Backbone.history.start(); /* Start routing URLS */
    };
    
    
    return {/* return the require.js module value */
        initialize: initialize
    };
 
});


