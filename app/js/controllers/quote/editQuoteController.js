angular.module("sistema").controller("editQuoteController", function($scope, quoteAPI, quote, $location) {
    $scope.quote = angular.copy(quote.data);
    $scope.editMode = false;
    var itemMaster = { "quoteId": quote.data.id, "id": 0 };
    $scope.item = angular.copy(itemMaster);


    var reset = function() {
        $scope.item = angular.copy(itemMaster);
    };

    $scope.addItem = function(item) {
        item.total = totalPrice(item.quantity, item.price);
        $scope.quote.items.push(angular.copy(item));
        $scope.quote.total += item.total;
        reset();
    }

    $scope.removeItem = function(item) {
        var items = $scope.quote.items;
        $scope.quote.items = items.filter(function(elem) {
            return elem.description !== item.description;
        });
        $scope.quote.total -= item.total;

    }

    var totalPrice = function(quantity, price) {
        return quantity * price;
    }

    var totalQuote = function(items) {
        items.forEach(function(item) {
            return item.price;
        });
    }

    $scope.deleteQuote = function(id) {
        quoteAPI.deleteQuote(id).success(function(data) {
            $location.path("/quote");
        });
    }

    $scope.updateQuote = function(quote) {
        quoteAPI.updateQuote(quote).success(function(data) {
            $scope.editMode = false;
        });
    }

    $scope.enableEdit = function() {
        $scope.editMode = true;
    }

    $scope.cancelEdit = function() {
        $scope.editMode = false;
        $scope.quote = angular.copy(quote.data);
    }

});
