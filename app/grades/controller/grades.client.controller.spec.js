(function() {
'use strict';

  describe('GradesController', function() {
    //Initialize global variables
		var GradesController,
        studentService,
        scope,
        Student;

		// Load the main application module
		beforeEach(module('mg'));

		beforeEach(inject(function($controller, $rootScope, _studentService_, _Student_) {
      Student = _Student_;
      studentService = _studentService_;
      scope = $rootScope.$new();
			GradesController = $controller('GradesController', {$scope:scope});
		}));

    it('should create students array', function() {
      expect(GradesController.students).toEqual([]);
    });

    describe('addStudent', function() {
      var student;
      beforeEach(function() {
        spyOn(studentService, 'createStudent').and.returnValue({});
        GradesController.name = 'test';
        GradesController.grade = 30;
        GradesController.addStudent();
      });

      it('should call studentService to add student', function() {
        expect(studentService.createStudent).toHaveBeenCalledWith('test', 30);
      });

      it('should add student to students', function() {
        expect(GradesController.students.length).toBe(1);
      });
    });

    describe('deleteStudent', function() {
      var student;
      beforeEach(function() {
        student = new Student('name', 30);
        GradesController.students.push(student);
        spyOn(studentService, 'deleteStudent').and.returnValue(student);
        GradesController.deleteStudent(student);
      });

      it('should call studentService to delete student', function() {
        expect(studentService.deleteStudent).toHaveBeenCalledWith(student);
      });

      it('should remove student to students', function() {
        expect(GradesController.students.length).toBe(0);
      });
    });

    describe('saveStudent', function() {
      var student;
      beforeEach(function() {
        student = new Student('name', 30);
        GradesController.students.push(student);
        spyOn(studentService, 'updateStudent').and.returnValue(student);
        GradesController.saveStudent(student);
      });

      it('should call studentService to update student', function() {
        expect(studentService.updateStudent).toHaveBeenCalledWith(student);
      });
    });
  });
})();