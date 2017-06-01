(function(angular) {
    angular.module('PeachtreeApp').controller('transactionCtrl', ['transactionService', function(transactionService) {
        var transCtrl = this;
        transactionService.getTransactions()
            .then(function(data) {
                loadTrnData(data);
            });

        function loadInitData(isInit) {
            var tran = transactionService.getDefaultTransaction();

            if (!transCtrl.total) transCtrl.total = tran.total;
            transCtrl.amount = tran.amount;
            transCtrl.merchantLogo = tran.merchantLogo;
            transCtrl.categoryCode = tran.categoryCode;
            transCtrl.merchant = tran.merchant;
            transCtrl.transactionDate = tran.transactionDate;
            transCtrl.transactionType = tran.transactionType;
            transCtrl.isValid = tran.isValid;
            transCtrl.amountNotAllowed = tran.amountNotAllowed;
            transCtrl.insufficientFunds = tran.insufficientFunds;
            transCtrl.showTransfer = tran.showTransfer;

            if (isInit) {
                transCtrl.transaction = {
                    amount: transCtrl.amount,
                    categoryCode: transCtrl.categoryCode,
                    merchant: transCtrl.merchant,
                    merchantLogo: transCtrl.merchantLogo,
                    transactionDate: transCtrl.transactionDate,
                    transactionType: transCtrl.transactionType
                };
            }

        }

        loadInitData(true);

        transCtrl.onSubmit = function(form) {
            if ((form.$valid) && (transCtrl.transaction.amount)) {
                if (!isNaN(parseFloat(transCtrl.transaction.amount))) {

                    if (transCtrl.transaction.amount <= transCtrl.total) {
                        showTransfer(true);
                        transCtrl.insufficientFunds = false;
                        transCtrl.amountNotAllowed = false;
                        transCtrl.isValid = true;
                    } else {
                        transCtrl.amountNotAllowed = false;
                        transCtrl.insufficientFunds = true;
                        transCtrl.isValid = false;
                    }

                } else {
                    transCtrl.isValid = false;
                    transCtrl.amountNotAllowed = true;
                }
            }
        };

        transCtrl.onCancel = function() {
            showTransfer(false);
        };

        transCtrl.transferMoney = function() {
            transCtrl.total -= parseFloat(transCtrl.transaction.amount);
            var myTransaction = angular.copy(transCtrl.transaction);
            transCtrl.myTransactions.push(myTransaction);
            loadTrnData(transCtrl.myTransactions);
            showTransfer(false);
            loadInitData(false);
            resetTransaction();
        };

        function showTransfer(val) {
            transCtrl.showTransfer = val;
        }

        function loadTrnData(data) {
            transCtrl.myTransactions = data;
            //loadInitData(false);

        }

        function resetTransaction() {
            transCtrl.transaction.amount = null;
            transCtrl.transaction.merchant = null;
        }
    }])

})(angular);