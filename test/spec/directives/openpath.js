'use strict';

describe('Directive: openPath', function () {

  // load the directive's module
  beforeEach(module('widgetFactoryApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<open-path></open-path>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the openPath directive');
  }));
});
