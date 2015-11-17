var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'HomeController',
    })
    .state('about', {
        url: '/about',
        templateUrl: 'pages/about.html',
        controller: 'AboutController',
    })
    .state('education', {
        url: '/education',
        templateUrl: 'pages/education.html',
        controller: 'EducationController',
    })
    .state('cv', {
        url: '/cv',
        templateUrl: 'pages/cv.html',
        controller: 'CVController',
    })
    .state('projects',{
        url:'/projects',
        templateUrl: 'pages/projects.html',
        controller: 'ProjectsController',
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'pages/contact.html',
        controller: 'ContactController',
    })
})

.controller('HomeController', function($scope) {

})

.controller('AboutController', function($scope) {

})

.controller('EducationController', function($scope, $http) {
    $http.get('data/related-classes.JSON').success(function(response) {
        $scope.courseInfo = response;
    })
})

.controller('CVController', function($scope) {

})

.controller('ProjectsController', function($scope) {

})

.controller('ContactController', function($scope) {

}); 