var app = angular.module('app', ['ui.router', 'toaster', 'ngAnimate']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/linkOne');

    $stateProvider
        .state('linkOne', {
            url: '/linkOne',
            templateUrl: './component/linkOne/index.html',
            controller: 'linkOneController'
        });

});
