(function() {
  'use strict';

  describe('studentService', function() {
    var studentService, Student;

    beforeEach(module('mg'));

    beforeEach(inject(function(_studentService_, _Student_){
      Student = _Student_;
      studentService = _studentService_;
    }));

    describe('getStudents', function() {
      it('should return 0 students by default', function() {
        expect(studentService.getStudents()).toEqual([]);
      });
    });

    describe('createStudent', function() {
      var mockStudent = {},
          createdStudent;

      beforeEach(function() {
        mockStudent = new Student('StudentName', 90);
        createdStudent = studentService.createStudent(mockStudent.name, mockStudent.grade);
      });

      it('should create a student', function() {
        expect(createdStudent).toBeDefined();
      });

      it('should assign an id', function() {
        expect(createdStudent.id).toBeDefined();
      });

      describe('then updateStudent', function() {
        var updatedStudent;

        beforeEach(function() {
          createdStudent.name = 'updated';
          createdStudent.grade = 40;
          updatedStudent = studentService.updateStudent(createdStudent);
        });

        it('should return updated student', function() {
          expect(updatedStudent).toBeDefined();
        });

        it('should keep the id the same', function() {
          expect(updatedStudent.id).toBe(createdStudent.id);
        });

        it('should update the name', function() {
          expect(updatedStudent.name).toBe('updated');
        });

        it('should update the grade', function() {
          expect(updatedStudent.grade).toBe(40);
        });

        describe('then getStudent', function() {
          var returnedStudent;
          beforeEach(function() {
            returnedStudent = studentService.getStudent(updatedStudent.id);
          });

          it('should return the same student', function() {
            expect(returnedStudent).toEqual(updatedStudent);
          });
        });
      });

      describe('then getStudents', function() {
        var students;

        beforeEach(function() {
          students = studentService.getStudents();
        });

        it('should return 1 students by default', function() {
          expect(students.length).toBe(1);
        });

        it('should return proper student', function() {
          expect(students[0].id).toBe(createdStudent.id);
        });
      });

      describe('then deleteStudent', function() {
        var deletedStudent;

        beforeEach(function() {
          deletedStudent = studentService.deleteStudent(createdStudent);
        });

        it('should remove the student', function() {
          expect(studentService.getStudents().length).toBe(0);
        });
      });
    });
  });
})();