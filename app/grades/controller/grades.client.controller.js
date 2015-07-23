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
  vm.deleteStudent = deleteStudent;
  vm.saveStudent = saveStudent;

  function addStudent() {
    var student = studentService.createStudent(vm.name, vm.grade);
    vm.students.push(student);
  }

  function deleteStudent(student) {
    studentService.deleteStudent(student);
    vm.students.forEach(function(existingStudent, index) {
      if(student.id === existingStudent.id) {
        vm.students.splice(index, 1);
      }
    });
  }

  function saveStudent(student) {
    studentService.updateStudent(student);
  }
}
})();