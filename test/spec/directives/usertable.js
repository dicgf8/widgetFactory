'use strict';

describe('Directive: userTable', function () {

  // load the directive's module
  beforeEach(module('widgetFactoryApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<user-table></user-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the userTable directive');
  }));
});
