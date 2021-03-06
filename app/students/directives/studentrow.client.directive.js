(function() {
    'use strict';

    angular
        .module('mg')
        .directive('createStudent', createStudent);

    function createStudent() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/students/views/student.create.view.html',
            link: linkFunc,
            scope: {
              student: '=',
              addStudent: '&'
            },
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr) {}
    }

    function Controller() {
        var vm = this;
    }
})();