angular.module("sistema").controller("customerController", function($scope, customerAPI, customers, $filter, $location) {
    $scope.customers = $filter('orderBy')(customers.data, 'id');
    $scope.maxSize = 5;
    $scope.totalItems = customers.data.length;
    $scope.currentPage = 1;
    $scope.filteredCustomers = $scope.customers.slice(0, $scope.itemsPerPage);
    $scope.valueOptions = [{ name: '10', value: '10' }, { name: '25', value: '25' }, { name: '50', value: '50' }];
    $scope.itemsPerPage = $scope.valueOptions[0].value;

    $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.$watch("[currentPage, itemsPerPage]", function() {
        var begin = parseFloat((($scope.currentPage - 1) * $scope.itemsPerPage)),
            end = begin + parseFloat($scope.itemsPerPage);
        $scope.filteredCustomers = $scope.customers.slice(begin, end);
    });
});
