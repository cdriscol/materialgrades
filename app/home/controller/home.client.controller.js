(function() {
'use strict';

function HomeController() {
  var vm = this;
  vm.title = 'Chris Driscol | Material Grades';
}

angular
  .module('mg')
  .controller('HomeController', HomeController);
})();