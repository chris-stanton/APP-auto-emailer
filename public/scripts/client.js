var myApp = angular.module('myApp', ['ngRoute', 'firebase']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
        .when ('/login', {
          templateUrl: '/views/login.html',
          controller: 'LoginController',
          controllerAs: 'lc'
        })
        .when ('/add', {
          templateUrl: '/views/add.html',
          controller: 'AddController',
          controllerAs: 'ac'
        })
        .when ('/email', {
            templateUrl: '/views/email.html',
            controller: 'EmailController',
            controllerAs: 'ec'
        })
        .when ('/manage', {
            templateUrl: '/views/manage.html',
            controller: 'ManageController',
            controllerAs: 'mc'
        })
        .otherwise ( {
            redirectTo: '/add'
        });
}]);
