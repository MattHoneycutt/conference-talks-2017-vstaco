(function (undefined) {

    angular.module('app')
        .config($stateProvider => {
            $stateProvider.state('whereAmI', {
                url: '/whereAmI',
                template: '<where-am-i></where-am-i>'
            });
        });
})();