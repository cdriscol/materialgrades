(function() {
'use strict';

function GradesController(studentService) {
  var vm = this;
  vm.students = [];
}

angular
  .module('mg')
  .controller('GradesController', GradesController);

GradesController.$inject = ['studentService'];
})();