'use strict';

describe('Service: widgetApi', function () {

  // load the service's module
  beforeEach(module('widgetFactoryApp'));

  // instantiate service
  var widgetApi;
  beforeEach(inject(function (_widgetApi_) {
    widgetApi = _widgetApi_;
  }));

  it('should do something', function () {
    expect(!!widgetApi).toBe(true);
  });

});
