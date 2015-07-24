(function() {
    'use strict';

    angular
        .module('mg')
        .directive('gradesSummary', gradesSummary);

    function gradesSummary() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/grades/views/summary.client.view.html',
        };

        return directive;
    }
})();