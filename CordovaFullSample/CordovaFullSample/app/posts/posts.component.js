(function (undefined) {

    angular.module('app')
        .component('posts',
        {
            templateUrl: '/app/posts/posts.template.html',
            controller: controller,
            controllerAs: 'vm'
        });

    function controller($cordovaInAppBrowser) {
        const vm = this;

        vm.showPosts = showPosts;

        function showPosts() {
            new $cordovaInAppBrowser('http://trycatchfail.com/blog', '_blank');
        }
    }
})();