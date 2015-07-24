(function() {
  'use strict';

  describe('gradeCalculator', function() {
    var studentService, gradeCalculator;

    beforeEach(module('mg'));

    beforeEach(inject(function(_studentService_, _gradeCalculator_, Student){
      gradeCalculator = _gradeCalculator_;
      studentService = _studentService_;

      var student1 = new Student('name', 80);
      var student2 = new Student('name', 20);
      var invalidStudent = new Student();
      spyOn(invalidStudent, 'isValid').and.returnValue(false);
      studentService.getStudents = function() {
        return [student1, student2, invalidStudent];
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