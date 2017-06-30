'use strict';


module.exports = angular.module('factory.common', []).factory('arrfun', function($rootScope) {
    return {
        GetBoolVal: function(data) {
            $rootScope.name = data;
            if (data == null)
                return data;
            if (data)
                return 'true';
            else
                return 'false';
        }
    }
}).factory('tablefun', function() {
    return {
        GetBoolVal: function(data) {
            if (data == null)
                return data;
            if (data)
                return 'true';
            else
                return 'false';
        }
    }
}).name;