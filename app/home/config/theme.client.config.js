(function() {
  'use strict';

  angular
    .module('mg')
    .config(themeConfig);

  function themeConfig($mdThemingProvider) {
    // Configure a dark theme with primary foreground blue
    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('blue')
        .dark();
  }
})();