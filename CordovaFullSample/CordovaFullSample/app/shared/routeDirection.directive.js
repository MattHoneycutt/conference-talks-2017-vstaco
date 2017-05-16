(function (undefined) {

    angular.module('app').directive('routeDirection', () => {
        var stateStack = [];
        return {
            link: (scope, element) => {
                scope.$on('$stateChangeStart', (event, toState, toParams, fromState) => {

                    if (fromState == null || fromState.name === '') return;

                    var previousState = stateStack.length > 0 ? stateStack[0] : null;

                    if (previousState === toState.name) {
                        stateStack.shift();
                        element.addClass('reverse');
                    } else {
                        stateStack.unshift(fromState.name);
                        element.removeClass('reverse');
                    }

                    if (stateStack.length > 20) {
                        stateStack.length = 20;
                    }
                });
            }
        }
    });

})();