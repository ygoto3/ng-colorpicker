module.exports = angular.module('ng-colorpicker.components.colorbox-group', [
  'ng-colorpicker.components.colorbox'
])
.directive('ngColorboxGroup', [
  () => {
    return {
      restrict: 'E',
      replace: true,
      template: require('jade!./template.jade')(),

      scope: {
        colorboxes: '=model',
        limit: '@'
      },

      link: (iScope) => {
        return;
      }
    };
  }
]);
