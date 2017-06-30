// Default colors
require("../css/style.css");
require("../../node_modules/simple-line-icons/css/simple-line-icons.css");
require("../../node_modules/font-awesome/css/font-awesome.css");
require("../../node_modules/bootstrap-table/dist/bootstrap-table.min.css");
angular
  .module('app', [
    require('angular-ui-router'),
    require('oclazyload'),
    require('./directive/default/directives.js'),
    require('./directive/breadcrumb/angular-breadcrumb.js'),
    require('./routes.js'),
  ])
  .run(
    [
      '$templateCache',
      function($templateCache) {
        // Put in cache the files that are ng-include'd in templates
        $templateCache.put('views/common/aside.html', require('../views/common/aside.html'));
        $templateCache.put('views/common/footer.html', require('../views/common/footer.html'));
        $templateCache.put('views/common/navbar.html', require('../views/common/navbar.html'));
        $templateCache.put('views/common/sidebar-nav.html', require('../views/common/sidebar-nav.html'));
        $templateCache.put('views/common/top-nav.html', require('../views/common/top-nav.html'));


      }
    ]);