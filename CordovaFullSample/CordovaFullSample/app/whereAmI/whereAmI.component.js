(function (undefined) {

    angular.module('app')
        .component('whereAmI',
        {
            templateUrl: '/app/whereAmI/whereAmI.template.html',
            controller: controller,
            controllerAs: 'vm'
        });

    function controller($scope, $cordovaGeolocation) {
        const vm = this;

        let subscription;

        vm.$onInit = $onInit;
        vm.$onDestroy = $onDestroy;

        function $onInit() {
            $cordovaGeolocation.getCurrentPosition({ enableHighAccuracy: true })
                .then(data => {
                    vm.latitude = data.coords.latitude.toFixed(4);
                    vm.longitude = data.coords.longitude.toFixed(4);
                }).catch(ex => {
                    vm.ex = JSON.stringify(ex);
                });

            subscription =
                $cordovaGeolocation.watchPosition({ enableHighAccuracy: true })
                .subscribe(data => {
                    $scope.$apply(() => {
                        vm.latitude = data.coords.latitude.toFixed(4);
                        vm.longitude = data.coords.longitude.toFixed(4);
                    });
                });


        }

        function $onDestroy() {
            if (subscription) subscription.unsubscribe();
        }

    }
})();