(function() {
'use strict';

  describe('GradesController', function() {
    //Initialize global variables
		var GradesController,
        studentService,
        scope;

		// Load the main application module
		beforeEach(module('mg'));

		beforeEach(inject(function($controller, $rootScope, _studentService_) {
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
  });
})();