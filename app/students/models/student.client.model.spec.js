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

    describe('isValid', function() {
      it('should be truthy with name and grade of 0', function() {
        var student = new Student('name', 0);
        expect(student.isValid()).toBeTruthy();
      });

      it('should be falsy with no name and grade', function() {
        var student = new Student(undefined, 0);
        expect(student.isValid()).toBeFalsy();
      });

      it('should return falsy grade under 0', function() {
        var student = new Student('name', -1);
        expect(student.isValid()).toBeFalsy();
      });

      it('should return falsy with no grade', function() {
        var student = new Student('name', undefined);
        expect(student.isValid()).toBeFalsy();
      });
    });
  });
})();