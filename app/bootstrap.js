/**
 * bootstrap.js is called from index.html and
 * intiates the application
 */
require.config({/* define common path shortcuts for require.js */
    paths: {
        jquery: 'js/vendor/jquery',
        underscore: 'js/vendor/underscore',
        backbone: 'js/vendor/backbone',
        text: 'js/vendor/text',
        qunit: 'js/vendor/qunit',
        router: 'js/router'
    },
    shim: {
        qunit: {/* shim qunit to work with require.js*/
            exports: 'qunit',
            init: function() {
                qunit.config.autoload = false;
                qunit.config.autostart = false;
            }
        }
    }
});


require(['router'], function(Router) { /* call the router */
    Router.initialize();        
});



