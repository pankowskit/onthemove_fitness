angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html"
    })
    .when("/comingsoon",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/crossfit",{
        templateUrl: "app/templates/crossfit.html"
    })
    .when("/fitness",{
        templateUrl: "app/templates/fitness.html"
    })
    .when("/movement",{
        templateUrl: "app/templates/movement.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});