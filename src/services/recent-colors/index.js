var cm = require('color-model');
var Color = require('babel!../../models/Color/');

module.exports = angular.module('ng-colorpicker.services.recent-colors', [])
.factory('ngRecentColors', [
  '$window',
  'ngColorpickerConstants',
  (
    $window,
    ngColorpickerConstants
  ) => {
    class RecentColors {

      constructor() {
        this.data = this.getFromLocalStorage();
      }

      getAll() {
        return this.data;
      }

      add(color) {
        this.data.unshift(color);
        return this;
      }

      replaceWith(data) {
        this.data.length = 0;
        [].push.apply(this.data, data);
        return this;
      }

      getFromLocalStorage() {
        var _recentHexData = $window.localStorage.getItem(ngColorpickerConstants.history);
        if (!_recentHexData) return [];

        var _recentHexes = JSON.parse(_recentHexData);
        return _recentHexes.map((hex) => {
          var _rgb = new cm.HexRgb(hex)
          return new Color(
            _rgb.red(),
            _rgb.green(),
            _rgb.blue()
          ).get();
        });
      }

      saveToLocalStorage() {
        var _hexData = this.data
        .map(color => new cm.Rgb(color.r, color.g, color.b).toHexString());
        $window.localStorage.setItem(ngColorpickerConstants.history, JSON.stringify(_hexData));
        return this;
      }

    }

    return new RecentColors();
  }
]);
