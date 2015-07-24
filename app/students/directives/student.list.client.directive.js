(function() {
    'use strict';

    angular
        .module('mg')
        .directive('studentList', studentList);

    function studentList() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/students/views/student.list.view.html'
        };

        return directive;
    }
})();