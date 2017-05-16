(function (undefined) {

    angular.module('app')
        .component('weather',
        {
            templateUrl: '/app/weather/weather.template.html',
            controller: controller,
            controllerAs: 'vm'
        });

    function controller($http) {
        const vm = this;

        //TODO: Substitue this with your own openweathermap.org API key.
        const apiKey = 'API_KEY';

        vm.$init = $init();

        function $init() {
            const zipcode = '37115';
            const url = 'http://api.openweathermap.org/data/2.5/weather?' +
                `zip=${zipcode},us&appid=${apiKey}&units=imperial`;

            $http.get(url)
                .then(resp => {
                    vm.weather = resp.data;
                })
                .catch(ex => {
                    vm.ex = JSON.stringify(ex);
                });
        }
    }
})();