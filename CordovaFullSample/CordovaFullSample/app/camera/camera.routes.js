(function (undefined) {

    angular.module('app')
        .config($stateProvider => {
            $stateProvider.state('camera', {
                url: '/camera',
                template: '<camera></camera>'
            });
        });
})();