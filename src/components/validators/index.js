var _ = require('lodash');

module.exports = angular.module('ng-colorpicker.components.validators', [])
.factory('ngColorpickerValidator', [
  () => {
    var _hex = /^#[0-9a-fA-F]{3,6}$/;

    var _decimal = {
      test: (number) => {
        var parsed = parseInt(number);

        if (!_.isNaN(parsed) && _.isNumber(parsed)) {
          return parsed > 0 && parsed <= 255;
        } else {
          return false
        }
      }
    };

    var _color = {
      test: (obj) => {
        var _keys = ['r', 'g', 'b'];

        for (var _i = 0, _len = _keys.length; _i < _len; _i++) {
          if (!(!!obj[_keys[_i]] && _decimal.test(obj[_keys[_i]]))) {
            return false;
          }
        }
        return true;
      }
    };

    return {
      hex: _hex,
      decimal: _decimal,
      color: _color
    };
  }
]);
