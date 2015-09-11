(function () {
    'use strict';

    var crowdModule = angular.module('crowdModule', ['ui.router', 'ngMap']);

    crowdModule.config(['$stateProvider', function ($stateProvider)
    {
      var home= {
        url: "/",
        templateUrl: 'homeView.html',
        controller: 'homeController',
        controllerAs: 'hmCtrl'
      },
      artist= {
        url: "/artist/:name",
        resolve: {
            name: ['$stateParams', function ($stateParams) {
                return $stateParams.name;
            }]
        },
        templateUrl: 'artistView.html',
        controller: 'artistController',
        controllerAs: 'artCtrl'
      },
      city= {
        url: '/city/:name',
        resolve: {
            name: ['$stateParams', function ($stateParams) {
                return $stateParams.name;
            }]
        },
        templateUrl: 'cityView.html',
        controller: 'cityController',
        controllerAs: 'ctCtrl'
      };
      $stateProvider.state('home', home)
      .state('artist', artist)
      .state('city', city);
    }]);
})();
