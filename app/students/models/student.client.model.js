(function() {
  'use strict';

  angular
    .module('mg')
    .factory('Student', StudentModel);

  function StudentModel() {
    function Student(name, grade) {
      this.name = name;
      this.grade = grade;
    }

    Student.prototype.isFailing = function() {
      return this.grade < 65;
    };

    Student.prototype.isValid = function() {
      return this.name && this.grade >= 0;
    };

    return (Student);
  }
})();