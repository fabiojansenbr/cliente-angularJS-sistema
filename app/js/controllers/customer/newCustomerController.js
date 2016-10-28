angular.module("sistema").controller("newCustomerController", function($scope, customerAPI) {
    var customerMaster = { "phones": [{ "customerId": 0, "id": 0 }], "address": { "customerId": 0, "id": 0 }, "id": 0 };
    $scope.customer = angular.copy(customerMaster);
    

    var reset = function() {
        $scope.customer = angular.copy(customerMaster);
    };

    $scope.saveCustomer = function(customer) {
        customerAPI.saveCustomer(customer).success(function(data) {
            reset();
        });
    };


    $scope.clearForm = function() {
        reset();
        $scope.customerForm.$setPristine();
    }
});
