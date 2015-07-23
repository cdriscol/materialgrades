(function() {
'use strict';

angular
  .module('mg')
  .controller('SummaryController', SummaryController);

SummaryController.$inject = ['gradeCalculator', '$scope'];

function SummaryController(gradeCalculator, $scope) {
  var vm = this;

  $scope.$on('grades-changed', function(event, args) {
    gradeCalculator.calcGrades();
    vm.minGrade = gradeCalculator.getMinGrade();
    vm.maxGrade = gradeCalculator.getMaxGrade();
    vm.avgGrade = gradeCalculator.getAvgGrade();
  });
}
})();