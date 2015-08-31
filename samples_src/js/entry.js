angular.module('samples', ['ng-colorpicker'])
.controller('SampleCtrl', [
  '$scope',
  'ngColor',
  (
    $scope,
    ngColor
  ) => {
    $scope.color = new ngColor(255, 255, 255).get();

    $scope.history = [];
    return
  }
]);
