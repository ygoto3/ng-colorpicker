var cm = require('color-model');

module.exports = angular.module('ng-colorpicker.components.colorhue', [])
.directive('ngColorhue', [
  () => {
    return {
      restrict: 'E',
      replace: true,
      template: require('jade!./template.jade')(),

      scope: {
        color: "=model",
        direction: '@'
      },

      link: (iScope) => {
        var colorDirection = 'bottom';
        var width = '20px';
        var height = '156px';
        var tmp = null;

        if (iScope.direction !== 'horizontal' && iScope.direction !== 'vertical') {
          iScope.direction = 'vertical';
        }

        if (iScope.direction === 'horizontal') {
          colorDirection = 'right';
          tmp = height;
          height = width;
          width = tmp;
        }

        iScope.styles = {
          container: {
            position: 'relative',
            width: width,
            height: height,
          },

          arrow: {
            position: 'absolute',
            right: '0',
            width: '0',
            height: '0',
            'border-top': '6px solid transparent',
            'border-bottom': '6px solid transparent',
            'border-right': '7px solid #858585',
            transform: 'translate(100%, -50%)'
          },

          hue: {
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to ' + colorDirection + ',#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000)',
            cursor: 'n-resize'
          }
        };
      },

      controller: [
        '$scope',
        (
          $scope
        ) => {

          var _mousedown = false;

          var _setColor = (e) => {
            var _position = 0;
            var _fullLength = 0;
            var _hue = 0;
            var _hsl = new cm.Rgb($scope.color.r, $scope.color.g, $scope.color.b).toHsl();

            if ($scope.direction === 'vertical') {
              _position = e.offsetY;
              _fullLength = e.currentTarget.clientHeight;
            } else {
              _position = e.offsetX;
              _fullLength = e.currentTarget.clientWidth;
            }
            _hue = 360 * ((_fullLength - _position) / _fullLength);

            var _Rgb = _hsl.hue(_hue).toRgb();
            $scope.color = {
              r: _Rgb.red(),
              g: _Rgb.green(),
              b: _Rgb.blue()
            };

            $scope.styles.arrow.top = _position + 'px';
          };

          $scope.onMousedown = (e) => {
            _mousedown = true;
            _setColor(e);
          };

          $scope.onMousemove = (e) => {
            if (!_mousedown) return;
            _setColor(e);
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
