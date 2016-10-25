angular.module("sistema").controller("quoteController", function($scope, quoteAPI) {
    $scope.quote = { "id": 0 };
    $scope.item = { "quoteId": 0, "id": 0 };
    $scope.quote.total = 0.0
    $scope.quote.items = [];

    $scope.itemMaster = { "quoteId": 0, "id": 0 };

    var reset = function() {
        $scope.item = angular.copy($scope.itemMaster);
    };


    var totalPrice = function(quantity, price) {
        return quantity * price;
    }

    var loadQuotes = function() {
        quoteAPI.getQuotes().success(function(data) {
            $scope.quotes = data;
        }).error(function(data, status) {
            $scope.message = "Someting went wrong :(" + data
        });
    }

    var totalQuote = function(items) {
        items.forEach(function(item){
            return item.price;
        });
    }

    $scope.addItem = function(item) {
        item.total = totalPrice(item.quantity, item.price);
        $scope.quote.items.push(angular.copy(item));
        $scope.quote.total += item.total;
        reset();
    }

    $scope.saveQuote = function(quote) {
        $scope.quote.date = new Date().getTime();
        quoteAPI.saveQuote(quote).success(function(data) {
            loadQuotes();
        });
    }

    $scope.deleteQuote = function(id) {
        quoteAPI.deleteQuote(id).success(function(data) {
            loadQuotes();
        });
    }

    $scope.downloadPdf = function(id) {
        quoteAPI.downloadPdf(id).success(function(data) {
            var file = new Blob([data], { type: 'application/pdf' });
            saveAs(file, "orcamento.pdf");
        });
    }

    $scope.removeItem = function (item) {
       var items = $scope.quote.items;
       $scope.quote.items = items.filter(function(elem){
            return elem.description !== item.description;
        });
       $scope.quote.total -= item.total;
       
    }

    loadQuotes();
});
