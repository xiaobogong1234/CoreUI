'use strict';
module.exports = angular.module('app.main', []).controller('mainCtrl', function($scope) {
    getBodyHeight();
    $scope.name = "我是主页";

}).name;