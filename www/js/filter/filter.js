/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-06-28 12:58:07
 * @version $Id$
 */
module.exports = angular.module('factory.filter', []).filter('arrfilter', function() {
    return function(data) {

        return data + '元';
    }

}).name;