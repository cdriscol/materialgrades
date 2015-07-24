(function() {
  'use strict';

  angular
    .module('mg')
    .factory('studentService', studentsdata);

  studentsdata.$inject = ['Student'];

  function studentsdata(Student) {
    var _students = {};
    return {
      getStudents: getStudents,
      updateStudent: updateStudent,
      deleteStudent: deleteStudent,
      createStudent: createStudent,
      getStudent: getStudent
    };

    function getStudents() {
      var students = [];
      for(var id in _students) {
        students.push(_students[id]);
      }
      return students;
    }

    function updateStudent(student) {
      _students[student.id] = student;
      return student;
    }

    function deleteStudent(student) {
      delete _students[student.id];
      return student;
    }

    function getStudent(id) {
      return _students[id];
    }

    function createStudent(student) {
      student.id = Object.keys(_students).length;
      _students[student.id] = student;
      return student;
    }
  }
})();