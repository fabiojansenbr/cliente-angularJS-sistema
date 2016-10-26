angular.module("sistema").controller("navController", function($scope) {
  $scope.oneAtATime = true;
  
  $scope.status = {
      isCustomerOpen: false,
      isQuoteOpen: false
    };
});
