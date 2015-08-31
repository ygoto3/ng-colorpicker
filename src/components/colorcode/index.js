module.exports = angular.module('ng-colorpicker.components.colorcode', [])
.directive('ngColorcode', [
  '$log',
  (
    $log
  ) => {
    return {
      restrict: 'E',
      replace: true,
      template: require('jade!./template.jade')(),

      scope: {
        code: "=model"
      },

      link: () => {
        $log.debug('colorcode');
      }
    };
  }
]);
