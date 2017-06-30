'use strict';
module.exports = angular.module('app.main2', []).controller('cardChartCtrl1', function($scope) {
        getBodyHeight();
        $scope.name = "hollo angular";

    })
    .controller('cardChartCtrl2', function($scope) {
        getBodyHeight();
        $scope.name = "hollo world";

    }).name;