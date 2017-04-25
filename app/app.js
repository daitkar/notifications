var app = angular.module('app', ['ui.router', 'toaster', 'ngAnimate','notification','data']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/popup');

    $stateProvider
        .state('popup', {
            url: '/popup',
            template: '<popup></popup>'
        });
});
