(function() {
'use strict';

  describe('HomeController', function() {
    //Initialize global variables
		var HomeController;

		// Load the main application module
		beforeEach(module('mg'));

		beforeEach(inject(function($controller, $rootScope) {
			HomeController = $controller('HomeController', {});
		}));

    it('should set title to my name | title', function() {
      expect(HomeController.title).toBe('Chris Driscol | Material Grades');
    });
  });
})();