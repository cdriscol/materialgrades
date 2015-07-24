(function() {
'use strict';

angular
  .module('mg')
  .controller('SummaryController', SummaryController);

SummaryController.$inject = ['gradeCalculator', '$scope', 'studentService'];

function SummaryController(gradeCalculator, $scope, studentService) {
  var vm = this;

  $scope.$watch(function() {
    return studentService.getLastUpdate();
  }, calcGrades);

  function calcGrades() {
    gradeCalculator.calcGrades();
    vm.minGrade = gradeCalculator.getMinGrade();
    vm.maxGrade = gradeCalculator.getMaxGrade();
    vm.avgGrade = gradeCalculator.getAvgGrade();
  }
}
})();