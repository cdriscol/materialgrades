(function() {
'use strict';

  describe('SummaryController', function() {
		var SummaryController,
        gradeCalculator,
        scope;

		beforeEach(module('mg'));

		beforeEach(inject(function($controller, $rootScope, _gradeCalculator_) {
      gradeCalculator = _gradeCalculator_;
      scope = $rootScope.$new();
			SummaryController = $controller('SummaryController', {$scope:scope});
		}));

    describe('broadcast grades-changed', function() {
      beforeEach(function() {
        spyOn(gradeCalculator, 'calcGrades');
        spyOn(gradeCalculator, 'getMinGrade').and.returnValue(10);
        spyOn(gradeCalculator, 'getMaxGrade').and.returnValue(20);
        spyOn(gradeCalculator, 'getAvgGrade').and.returnValue(30);

        scope.$apply();
      });

      it('should calc grades', function() {
        expect(gradeCalculator.calcGrades).toHaveBeenCalled();
      });

      it('should get max grade', function() {
        expect(SummaryController.maxGrade).toBe(20);
      });

      it('should get min grade', function() {
        expect(SummaryController.minGrade).toBe(10);
      });

      it('should get avg grade', function() {
        expect(SummaryController.avgGrade).toBe(30);
      });
    });
  });
})();