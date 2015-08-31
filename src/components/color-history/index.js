var cm = require('color-model');
var _dirName = 'ngColorHistory';

module.exports = angular.module('ng-colorpicker.components.color-history', [])
.directive(_dirName, [
  '$window',
  'ngColorpickerConstants',
  'ngRecentColors',
  (
    $window,
    ngColorpickerConstants,
    ngRecentColors
  ) => {
    return {
      restrict: 'A',

      link: (iScope, iElem, iAttrs) => {
        var _setToScope = (key, data) => {
          var _target = iScope.$eval(`${key}`);
          _target.length = 0;
          [].push.apply(_target, data);
        };

        var _recentColors = ngRecentColors.getAll();
        _setToScope(iAttrs[_dirName], _recentColors)

        iScope.$watch(iAttrs[_dirName + 'Src'], (val, oldVal) => {
          if (!val || !oldVal || val === oldVal) return;

          var _recentColors = ngRecentColors
          .add(val)
          .saveToLocalStorage()
          .getAll();

          _setToScope(iAttrs[_dirName], _recentColors)
        });
      }
    };
  }
]);
