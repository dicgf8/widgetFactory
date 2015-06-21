'use strict';

describe('Directive: smallFilteredTable', function () {

  // load the directive's module
  beforeEach(module('widgetFactoryApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<small-filtered-table></small-filtered-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the smallFilteredTable directive');
  }));
});
