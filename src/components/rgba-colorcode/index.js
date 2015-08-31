module.exports = angular.module('ng-colorpicker.components.rgba-colorcode', [])
.directive('ngRgbaColorcode', [
  '$log',
  (
    $log
  ) => {
    return {
      restrict: 'E',
      replace: true,
      template: require('jade!./template.jade')(),

      scope: {
        rgbaColorcode: '=model'
      },

      link: (iScope) => {
        $log.debug('rgbaColorcode');
      }
    };
  }
]);
