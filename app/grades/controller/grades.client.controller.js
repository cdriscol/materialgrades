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
  vm.newStudent = new Student();

  function addStudent() {
    var student = studentService.createStudent(vm.newStudent);
    vm.students.push(student);
    vm.newStudent = new Student();
  }

  function deleteStudent(student) {
    studentService.deleteStudent(student);
    var studentIndex = vm.students.indexOf(student);
    vm.students.splice(studentIndex, 1);
  }

  function saveStudent(student) {
    if(student.isValid()) {
      studentService.updateStudent(student);
    }
  }
}
})();