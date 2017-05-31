(function(angular){
	angular.module('PeachtreeApp').service('transactionService', function($http, $q) {
	    var deffered = $q.defer();
	    $http.get('./app/data/transactions.json')
	        .then(function(data) {
	            // could potentially modify the data before sending
	            deffered.resolve(data);
	        });
	    this.getTransactions = function() {
	        return deffered.promise;
	    };
	})
})(angular);