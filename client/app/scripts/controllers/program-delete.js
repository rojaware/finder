'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProgramDeleteCtrl
 * @description
 * # ProgramDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProgramDeleteCtrl', function (
  $scope,
  $routeParams,
  Program,
  $location
) {
  $scope.program = Program.one($routeParams.id).get().$object;
  $scope.deleteProgram = function() {
    $scope.program.remove().then(function() {
      $location.path('/programs');
    });
  };
  $scope.back = function() {
    $location.path('/program/' + $routeParams.id);
  };
});
