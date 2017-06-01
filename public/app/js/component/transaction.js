(function(angular) {
    angular.module('PeachtreeApp')
        .component('transaction', {
            bindings: {
                trans: '<'
            },
            templateUrl: '/app/template/transaction.html'
        })
})(angular);
