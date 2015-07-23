(function() {
  'use strict';

  angular
    .module('mg')
    .factory('gradeCalculator', gradeCalculator);

  gradeCalculator.$inject = ['studentService'];

  function gradeCalculator(studentService) {
    var minGrade = 100,
        maxGrade = 0,
        avgGrade = 0;
    return {
      getMinGrade: getMinGrade,
      getAvgGrade: getAvgGrade,
      getMaxGrade: getMaxGrade,
      calcGrades: calcGrades
    };

    function getMinGrade() {
      return minGrade;
    }

    function getAvgGrade() {
      return avgGrade;
    }

    function getMaxGrade() {
      return maxGrade;
    }

    function calcGrades() {
      var sumGrade = 0,
          students = studentService.getStudents();
      students.forEach(function(student) {
        minGrade = Math.min(minGrade, student.grade);
        maxGrade = Math.max(maxGrade, student.grade);
        sumGrade += student.grade;
      });
      avgGrade = sumGrade / students.length;
    }
  }
})();