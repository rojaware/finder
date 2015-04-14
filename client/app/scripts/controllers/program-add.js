'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProgramAddCtrl
 * @description
 * # ProgramAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProgramAddCtrl', function ($scope, Program, $location) {
     $scope.program = {};
     $scope.saveProgram = function() {
       Program.post($scope.program).then(function() {
      $location.path('/programs');
    });
  };
});