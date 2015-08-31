var cm = require('color-model');

module.exports = angular.module('ng-colorpicker.components.colormap', [
  'ng-colorpicker.components.validators'
])
.directive('ngColormap', [
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
        var overlay = {
          position: 'absolute',
          left: '0',
          top: '0',
          width: '100%',
          height: '100%'
        };

        iScope.styles = {
          selector: {
            position: 'absolute',
            left: '0',
            top: '0',
            width: '12px',
            height: '12px',
            'border-radius': '50%',
            border: '1px solid #fff',
            transform: 'translate(-50%, -50%)'
          }
        };

        iScope.hue = {
          position: 'relative',
          width: '156px',
          height: '156px',
          background: '#fff'
        };

        iScope.whiteOverlay = {
          background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)'
        };

        iScope.blackOverlay = {
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
          cursor: 'crosshair'
        };

        iScope.$watch('color', (val) => {
          if (!ngColorpickerValidator.color.test(val)) return;

          var _hsl = new cm.Rgb(val.r, val.g, val.b).toHsl();
          var _hex = _hsl.saturation(1).lightness(0.5).toRgb().toHexString();

          iScope.color.hue = _hsl.hue();

          iScope.hue.background = _hex;
        }, true);

        angular.extend(iScope.whiteOverlay, overlay);
        angular.extend(iScope.blackOverlay, overlay);
        return;
      },

      controller: [
        '$scope',
        (
          $scope
        ) => {
          var _mousedown = false;
          var _setColor = (e) => {
            var _x = e.offsetX;
            var _y = e.offsetY;
            var _width = e.currentTarget.clientWidth;
            var _height = e.currentTarget.clientHeight;
            var _saturation = _x / _width;
            var _lightness = (_height - _y) / _height;
            var _rgb = new cm.Hsl($scope.color.hue, _saturation, _lightness).toRgb();

            $scope.color = {
              r: _rgb.red(),
              g: _rgb.green(),
              b: _rgb.blue()
            };

            $scope.styles.selector.left = _x;
            $scope.styles.selector.top = _y;
          };

          $scope.onMousedown = (e) => {
            _mousedown = true;
            _setColor(e);
          };

          $scope.onMousemove = (e) => {
            if (_mousedown) {
              _setColor(e);
            }
          };

          $scope.onMouseup = () => {
            _mousedown = false;
          };

          $scope.onMouseleave = () => {
            _mousedown = false;
          };

        }
      ]

    };
  }
]);
