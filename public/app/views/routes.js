(function(angular) {
    angular.module('PeachtreeApp')
        .config(function($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
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
