var cm = require('color-model');

module.exports = angular.module('ng-colorpicker.components.colorhex', [
  'ng-colorpicker.components.validators'
])
.directive('ngColorhex', [
  'ngColorpickerValidator',
  (
    ngColorpickerValidator
  ) => {
    return {
      restrict: 'E',
      replace: true,
      template: require('jade!./template.jade')(),

      scope: {
        color: "=model"
      },

      link: (iScope) => {
        iScope.hex = '#ffffff';

        iScope.$watch('color', (val) => {
          if (!ngColorpickerValidator.color.test(val)) return;

          iScope.hex = new cm.Rgb(val.r, val.g, val.b).toHexString();
        }, true);

        iScope.$watch('hex', (val) => {
          if (!val || !ngColorpickerValidator.hex.test(val)) return;

          var rgb = new cm.HexRgb(val);
          iScope.color.r = rgb.red();
          iScope.color.g = rgb.green();
          iScope.color.b = rgb.blue();
        });
      }

    };
  }
]);
