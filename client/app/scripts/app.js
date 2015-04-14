'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute' , 
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/programs', {
        templateUrl: 'views/programs.html',
        controller: 'ProgramsCtrl'
      })
      .when('/create/program', {
        templateUrl: 'views/program-add.html',
        controller: 'ProgramAddCtrl'
      })
      .when('/program/:id', {
        templateUrl: 'views/program-view.html',
        controller: 'ProgramViewCtrl'
      })
      .when('/program/:id/delete', {
        templateUrl: 'views/program-delete.html',
        controller: 'ProgramDeleteCtrl'
      })
      .when('/program/:id/edit', {
        templateUrl: 'views/program-edit.html',
        controller: 'ProgramEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('ProgramRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Program', function(ProgramRestangular) {
    return ProgramRestangular.service('program');
  })
  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });