(function (undefined) {

    angular.module('app',
    [
        //3rd party packges
        'ngAnimate',
        'ui.bootstrap',
        'ui.router',
        'ionic.native',
        //Application modules
        'templates'
    ])
    .config($urlRouterProvider => $urlRouterProvider.otherwise('home'))
    .run($cordovaStatusBar => {
        //$cordovaStatusBar.hide();
    });

    document.addEventListener('deviceready', () => {
        angular.bootstrap(document, ['app']);
    });

})();