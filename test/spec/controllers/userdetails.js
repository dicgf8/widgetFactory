'use strict';

describe('Controller: UserdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('widgetFactoryApp'));

  var UserdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserdetailsCtrl = $controller('UserdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
