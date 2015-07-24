(function() {
  'use strict';

  angular
    .module('mg')
    .factory('studentService', studentsdata);

  studentsdata.$inject = ['Student'];

  function studentsdata(Student) {
    var _students = {},
        _lastUpdate;
    return {
      getStudents: getStudents,
      updateStudent: updateStudent,
      deleteStudent: deleteStudent,
      createStudent: createStudent,
      getStudent: getStudent,
      getLastUpdate: getLastUpdate
    };

    function updateLastUpdate() {
      _lastUpdate = new Date();
    }

    function getLastUpdate() {
      return _lastUpdate;
    }

    function getStudents() {
      var students = [];
      for(var id in _students) {
        students.push(_students[id]);
      }
      return students;
    }

    function updateStudent(student) {
      _students[student.id] = student;
      updateLastUpdate();
      return student;
    }

    function deleteStudent(student) {
      delete _students[student.id];
      updateLastUpdate();
      return student;
    }

    function getStudent(id) {
      return _students[id];
    }

    function createStudent(student) {
      student.id = Object.keys(_students).length;
      _students[student.id] = student;
      updateLastUpdate();
      return student;
    }
  }
})();