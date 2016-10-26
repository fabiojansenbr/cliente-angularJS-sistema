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

  $routeProvider.when("/customer/:id/details", {
      templateUrl: "view/customer/details.html",
      controller: "editCustomerController",
      resolve: {
        customer: function (customerAPI, $route) {
          return customerAPI.getCustomerById($route.current.params.id);
        }
      }
  });


  $routeProvider.otherwise({redirectTo: "/"});
});
