angular.module("sistema").controller("newCustomerController", function($scope, customerAPI) {
    $scope.customer = { "phones": [{ "customerId": 0, "id": 0 }], "address": { "customerId": 0, "id": 0 }, "id": 0 };
    $scope.customerMaster = { "phones": [{ "customerId": 0, "id": 0 }], "address": { "customerId": 0, "id": 0 }, "id": 0 };

    var reset = function() {
        $scope.customer = angular.copy($scope.customerMaster);
    };

    $scope.saveCustomer = function(customer) {
        customerAPI.saveCustomer(customer).success(function(data) {
            reset();
        });
    };

    /*$scope.deleteCustomer = function(id) {
        customerAPI.deleteCustomer(id).success(function(data) {
            loadCustomers();
        });
    }

    $scope.getCustomerById = function(id) {
        customerAPI.getCustomerById(id).success(function(data) {
            $scope.customer = data;
        });
    }

    $scope.updateCustomer = function(customer) {
        customerAPI.updateCustomer(customer).success(function(data) {
            reset();
            loadCustomers();
        });
    }
    */

    $scope.clearForm = function() {
        reset();
        $scope.customerForm.$setPristine();
    }
});
