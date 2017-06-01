(function(angular) {
    angular.module('PeachtreeApp', ['ngRoute'])
        .config(function($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            console.log('Routes script pulled');
            $routeProvider
                .when('/', {
                    templateUrl: '/app/views/view.html'
                })
                .otherwise({ redirectTo: '/' });

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        });
})(angular);
