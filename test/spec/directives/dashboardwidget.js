'use strict';

describe('Directive: dashboardWidget', function () {

  // load the directive's module
  beforeEach(module('widgetFactoryApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dashboard-widget></dashboard-widget>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dashboardWidget directive');
  }));
});
