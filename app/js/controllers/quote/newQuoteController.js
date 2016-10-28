angular.module("sistema").controller("newQuoteController", function($scope, quoteAPI) {
    $scope.quote = { "id": 0 };
    $scope.itemMaster = { "quoteId": 0, "id": 0 };
    $scope.item = angular.copy($scope.itemMaster);
    $scope.quote.total = 0.0
    $scope.quote.items = [];

    
    var reset = function() {
        $scope.item = angular.copy($scope.itemMaster);
    };


    $scope.addItem = function(item) {
        item.total = totalPrice(item.quantity, item.price);
        $scope.quote.items.push(angular.copy(item));
        $scope.quote.total += item.total;
        reset();
    }

    $scope.removeItem = function (item) {
       var items = $scope.quote.items;
       $scope.quote.items = items.filter(function(elem){
            return elem.description !== item.description;
        });
       $scope.quote.total -= item.total;
       
    }

    var totalPrice = function(quantity, price) {
        return quantity * price;
    }

    var totalQuote = function(items) {
        items.forEach(function(item){
            return item.price;
        });
    }

    $scope.saveQuote = function(quote) {
        $scope.quote.date = new Date().getTime();
        quoteAPI.saveQuote(quote).success(function(data) {

        });
    }

/*
    $scope.deleteQuote = function(id) {
        quoteAPI.deleteQuote(id).success(function(data) {
            
        });
    }

    $scope.downloadPdf = function(id) {
        quoteAPI.downloadPdf(id).success(function(data) {
            var file = new Blob([data], { type: 'application/pdf' });
            saveAs(file, "orcamento.pdf");
        });
    }
    */


});
