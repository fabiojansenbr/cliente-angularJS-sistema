angular.module("sistema").config(function ($routeProvider){
  $routeProvider.when("/customer", {
      templateUrl: "view/customer/index.html",
      controller: "customerController",
      resolve: {
        customers: function (customerAPI) {
          return customerAPI.getCustomers();
        }
      }
  });

  $routeProvider.when("/newCustomer", {
      templateUrl: "view/customer/new.html",
      controller: "newCustomerController"
  });


  $routeProvider.otherwise({redirectTo: "/"});
});
