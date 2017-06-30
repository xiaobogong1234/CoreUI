'use strict';
module.exports = angular.module('app.route', []).config(function($stateProvider, $urlRouterProvider, $breadcrumbProvider, $ocLazyLoadProvider) {
  $urlRouterProvider.otherwise('/dashboard');
  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: true
  });

  $breadcrumbProvider.setOptions({
    prefixStateName: 'app.main',
    includeAbstract: true,
    template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
  });
  $stateProvider
    .state('app', {
      abstract: true,
      template: require('../views/common/layouts/full.html'),
      //page title goes here
      ncyBreadcrumb: {
        label: 'Root',
        skip: true
      }

    })
    .state('app.main', {
      url: '/dashboard',
      template: require('../views/main/main.html'),
      //page title goes here
      ncyBreadcrumb: {
        label: 'Home',
      },
      //page subtitle goes here
      params: {
        subtitle: 'Welcome to ROOT powerfull Bootstrap & AngularJS UI Kit'
      },
      resolve: {
        'loadHomeController': function($q, $ocLazyLoad) {
          var deferred = $q.defer();
          require.ensure([], function() {
            var mod = require('../views/main/main.js');
            $ocLazyLoad.load({
              name: 'app.main'
            });
            deferred.resolve(mod.controller);
          }, 'main');
          return deferred.promise;
        }
      }
    })
    .state('app.main2', {
      url: '/dashboard2',
      template: require('../views/components/dashboard2.html'),
      //page title goes here
      ncyBreadcrumb: {
        label: 'dashboard2',
      },
      //page subtitle goes here
      resolve: {
        'loadHomeController': function($q, $ocLazyLoad) {
          var deferred = $q.defer();
          require.ensure([], function() {
            var mod = require('../views/components/main.js');
            $ocLazyLoad.load({
              name: 'app.main2'
            });
            deferred.resolve(mod.controller);
          }, 'dashboard2');
          return deferred.promise;
        }
      }
    })
    .state('app.main1', {
      url: '/dashboard1',
      template: require('../views/components/dashboard1.html'),
      //page title goes here
      ncyBreadcrumb: {
        label: 'dashboard1',
      },
      //page subtitle goes here
      resolve: {
        'loadHomeController': function($q, $ocLazyLoad) {
          var deferred = $q.defer();
          require.ensure([], function() {
            var mod = require('../views/components/main.js');
            $ocLazyLoad.load({
              name: 'app.main2'
            });
            deferred.resolve(mod.controller);
          }, 'dashboard1');
          return deferred.promise;
        }
      }
    })
    .state('appSimple', {
      abstract: true,
      template: require('../views/common/layouts/simple.html')
    })
    .state('appSimple.login', {
      url: '/login',
      template: require('../views/pages/login.html')
    })
    .state('appSimple.register', {
      url: '/register',
      template: require('../views/pages/register.html')
    })
    .state('appSimple.404', {
      url: '/404',
      template: require('../views/pages/404.html')
    })
    .state('appSimple.500', {
      url: '/500',
      template: require('../views/pages/500.html')
    })
}).name;