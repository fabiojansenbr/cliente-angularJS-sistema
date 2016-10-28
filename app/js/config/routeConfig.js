angular.module("sistema").config(function($routeProvider) {
    $routeProvider.when("/customer", {
        templateUrl: "view/customer/list.html",
        controller: "customerController",
        resolve: {
            customers: function(customerAPI) {
                return customerAPI.getCustomers();
            }
        }
    });
    $routeProvider.when("/customer/new", {
        templateUrl: "view/customer/new.html",
        controller: "newCustomerController"
    });

    $routeProvider.when("/customer/:id/details", {
        templateUrl: "view/customer/details.html",
        controller: "editCustomerController",
        resolve: {
            customer: function(customerAPI, $route) {
                return customerAPI.getCustomerById($route.current.params.id);
            }
        }
    });

    $routeProvider.when("/quote", {
        templateUrl: "view/quote/list.html",
        controller: "quoteController",
        resolve: {
            quotes: function(quoteAPI) {
                return quoteAPI.getQuotes();
            }
        }
    });

    $routeProvider.when("/quote/new", {
        templateUrl: "view/quote/new.html",
        controller: "newQuoteController"
    });

    $routeProvider.when("/quote/:id/details", {
        templateUrl: "view/quote/details.html",
        controller: "editQuoteController",
        resolve: {
            quote: function(quoteAPI, $route) {
                return quoteAPI.getQuoteById($route.current.params.id);
            }
        }
    });


    $routeProvider.otherwise({ redirectTo: "/" });
});
