'use strict';

describe('Controller: ProgramAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ProgramAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProgramAddCtrl = $controller('ProgramAddCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
