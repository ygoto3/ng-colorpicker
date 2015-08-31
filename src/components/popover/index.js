module.exports = angular.module('ng-colorpicker.components.popover', [])
.directive('ngColorpickerPopover', [
  () => {
    return {
      restrict: 'E',
      replace: true,
      template: require('jade!./template.jade')(),

      scope: {
        color: '=model',
        history: '=history'
      },

      link: () => {
        return;
      }
    };
  }
]);
