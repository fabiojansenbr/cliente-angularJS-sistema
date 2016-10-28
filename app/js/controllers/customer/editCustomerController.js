angular.module("sistema").controller("editCustomerController", function($scope, customerAPI, customer, $location) {
    $scope.customer = angular.copy(customer.data);
    $scope.editMode = false;

    $scope.deleteCustomer = function(id) {
        customerAPI.deleteCustomer(id).success(function(data) {
            $location.path("/customer");
        });
    }

    $scope.updateCustomer = function(customer) {
        customerAPI.updateCustomer(customer).success(function(data) {
            $scope.editMode = false;
        });
    }

    $scope.enableEdit = function(){
        $scope.editMode = true;
    }

    $scope.cancelEdit = function() {
        $scope.editMode = false;
        $scope.customer = angular.copy(customer.data);
    }

});
