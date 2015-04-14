'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ProgramsCtrl
 * @description
 * # ProgramsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ProgramsCtrl', function (
  	$scope, 
  	Program
  ) {
  	$scope.programs = Program.getList().$object;
  	
  });
