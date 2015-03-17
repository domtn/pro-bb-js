requirejs.config({
   baseUrl: 'scripts/lib',
   paths: {
        models: '../models',
        collections: '../collections',
        views: '../views',
        routers: '../routers',
        components: '../components'
   },
   shim: {
    'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    },
    'underscore': {
        exports: '_'
    }
   } 
});

require(['routers/router'], function (router) {
    $(document).ready(function (){
        router.start();
    });
})