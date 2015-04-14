'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProgramViewCtrl
 * @description
 * # ProgramViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProgramViewCtrl', function (
  	$scope, 
  	$routeParams, 
  	Program
  ) {
  	$scope.viewProgram = true;
  	$scope.program = Program.one($routeParams.id).get().$object;
  });
