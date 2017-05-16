(function (undefined) {

    angular.module('app')
        .config($stateProvider => {
            $stateProvider.state('posts', {
                url: '/posts',
                template: '<posts></posts>'
            });
        });
})();