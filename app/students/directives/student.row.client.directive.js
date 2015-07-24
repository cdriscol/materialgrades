(function() {
    'use strict';

    angular
        .module('mg')
        .directive('studentRow', studentRow);

    function studentRow() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/students/views/student.row.view.html',
            scope: {
              student: '=',
              saveStudent: '&',
              deleteStudent: '&'
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    function Controller() {
        var vm = this;
    }
})();