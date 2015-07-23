(function() {
  'use strict';

  describe('gradeCalculator', function() {
    var studentService, gradeCalculator;

    beforeEach(module('mg'));

    beforeEach(inject(function(_studentService_, _gradeCalculator_, Student){
      gradeCalculator = _gradeCalculator_;
      studentService = _studentService_;

      var s1 = new Student('name', 80);
      var s2 = new Student('name', 20);
      studentService.getStudents = function() {
        return [s1, s2];
      };
    }));

    describe('calcGrades', function() {
      beforeEach(function() {
          gradeCalculator.calcGrades();
      });

      it('should set min grade', function() {
        expect(gradeCalculator.getMinGrade()).toBe(20);
      });

      it('should set max grade', function() {
        expect(gradeCalculator.getMaxGrade()).toBe(80);
      });

      it('should set avg grade', function() {
        expect(gradeCalculator.getAvgGrade()).toBe(50);
      });
    });
  });
})();