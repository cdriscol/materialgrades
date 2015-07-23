(function() {
  'use strict';

  describe('Student', function() {
    var Student;

    beforeEach(module('mg'));

    beforeEach(inject(function(_Student_){
      Student = _Student_;
    }));

    describe('ctor', function() {
      var student;
      beforeEach(function() {
        student = new Student('name', 80);
      });

      it('should create a student with a name', function() {
        expect(student.name).toEqual('name');
      });

      it('should create a student with a grade', function() {
        expect(student.grade).toEqual(80);
      });
    });

    describe('isFailing', function() {
      it('should return false if grade under 65', function() {
        var student = new Student('name', 64);
        expect(student.isFailing()).toBeTruthy();
      });

      it('should return true if grade over 64', function() {
        var student = new Student('name', 65);
        expect(student.isFailing()).toBeFalsy();
      });
    });
  });
})();