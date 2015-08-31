module.exports = angular.module('ng-colorpicker.services', [
  require('babel!./color/').name,
  require('babel!./recent-colors/').name
]);
