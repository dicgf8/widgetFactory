'use strict';

describe('Controller: WidgetdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('widgetFactoryApp'));

  var WidgetdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WidgetdetailsCtrl = $controller('WidgetdetailsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
