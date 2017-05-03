var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  //routes
    $routeProvider
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
