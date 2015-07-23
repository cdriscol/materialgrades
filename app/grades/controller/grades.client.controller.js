(function() {
'use strict';

angular
  .module('mg')
  .controller('GradesController', GradesController);

GradesController.$inject = ['studentService', 'Student'];

function GradesController(studentService, Student) {
  var vm = this;
  vm.students = studentService.getStudents();
  vm.addStudent = addStudent;

  function addStudent() {
    var student = studentService.createStudent(vm.name, vm.grade);
    vm.students.push(student);
  }
}
})();