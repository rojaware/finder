'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProgramEditCtrl
 * @description
 * # ProgramEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProgramEditCtrl', function (
  	$scope,
    $routeParams,
    Program,
    $location
) {
  $scope.editProgram = true;
  $scope.program = {};
  Program.one($routeParams.id).get().then(function(program) {
    $scope.program = program;
    $scope.saveProgram = function() {
      $scope.program.save().then(function() {
        $location.path('/program/' + $routeParams.id);
      });
    };
  });
});