(function (undefined) {

    angular.module('app')
        .component('camera',
        {
            templateUrl: '/app/camera/camera.template.html',
            controller: controller,
            controllerAs: 'vm'
        });

    function controller($cordovaCamera) {
        const vm = this;

        vm.getPicture = getPicture;

        function getPicture() {
            $cordovaCamera.getPicture({
                destinationType: Camera.DestinationType.FILE_URI,
            }).then(uri => {
                vm.image = uri;
            });
        }
    }
})();