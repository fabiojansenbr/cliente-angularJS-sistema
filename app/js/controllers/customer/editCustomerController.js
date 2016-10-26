angular.module("sistema").controller("editCustomerController", function($scope, customerAPI, customer, $location) {
    $scope.customer = customer.data;
    $scope.editMode = false;

    $scope.deleteCustomer = function(id) {
        customerAPI.deleteCustomer(id).success(function(data) {
            $location.path("/customer");
        });
    }

    $scope.updateCustomer = function(customer) {
        customerAPI.updateCustomer(customer).success(function(data) {
            $location.path("/customer");
        });
    }

    $scope.enableEdit = function(){
        $scope.editMode = true;
    }

    $scope.cancelEdit = function() {
        $scope.editMode = false;
    }

});
