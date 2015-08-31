module.exports = angular.module('ng-colorpicker.components', [
  require('babel!./color-history/').name,
  require('babel!./colorbox/').name,
  require('babel!./colorbox-group/').name,
  require('babel!./colorcode/').name,
  require('babel!./colorhex/').name,
  require('babel!./colorhue/').name,
  require('babel!./colormap/').name,
  require('babel!./popover/').name,
  require('babel!./rgba-colorcode/').name,
  require('babel!./validators/').name
]);
