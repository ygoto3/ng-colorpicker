module.exports = angular.module('ng-colorpicker.services.color', [])
.factory('ngColor', [
  () => {
    return require('babel!../../models/Color/');
  }
]);
