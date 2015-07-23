(function() {
'use strict';

  describe('GradesController', function() {
    //Initialize global variables
		var GradesController;

		// Load the main application module
		beforeEach(module('mg'));

		beforeEach(inject(function($controller, $rootScope) {
      var scope = $rootScope.$new();
			GradesController = $controller('GradesController', {$scope:scope});
		}));

    it('should create students array', function() {
      expect(GradesController.students).toEqual([]);
    });
  });
})();