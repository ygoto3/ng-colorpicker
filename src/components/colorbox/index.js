module.exports = angular.module('ng-colorpicker.components.colorbox', [])
.directive('ngColorbox', [
  () => {
    return {
      restrict: 'E',
      replace: true,
      template: require('jade!./template.jade')(),

      scope: {
        color: "=model",
        width: "@",
        height: "@"
      },

      link: (iScope) => {
        var setColorStyle = (color) => {
          iScope.styles.box.background = `rgb(${color.r}, ${color.g}, ${color.b})`;
        };

        iScope.styles = {
          box: {
            background: 'rgb(255, 255, 255)'
          }
        };

        if (iScope.width) iScope.styles.box.width = iScope.width + 'px';
        if (iScope.height) iScope.styles.box.height = iScope.height + 'px';

        iScope.$watch('color', (val) => {
          if (!val) return;

          setColorStyle(val);
        }, true);
      }
    };
  }
]);
