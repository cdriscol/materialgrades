(function() {
  'use strict';

  angular
    .module('mg')
    .factory('gradeCalculator', gradeCalculator);

  gradeCalculator.$inject = ['studentService'];

  function gradeCalculator(studentService) {
    var minGrade,
        maxGrade,
        avgGrade;
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

      minGrade = undefined;
      maxGrade = undefined;
      avgGrade = undefined;

      students.forEach(function(student) {
        minGrade = minGrade ? Math.min(minGrade, student.grade) : student.grade;
        maxGrade = maxGrade ? Math.max(maxGrade, student.grade) : student.grade;
        sumGrade += student.grade;
      });
      avgGrade = parseFloat((sumGrade / students.length).toFixed(1));
    }
  }
})();