(function (undefined) {

    angular.module('app')
        .config($stateProvider => {
            $stateProvider.state('weather', {
                url: '/weather',
                template: '<weather></weather>'
            });
        });
})();