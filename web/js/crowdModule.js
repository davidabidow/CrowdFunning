(function () {
    'use strict';

    var crowdModule = angular.module('crowdModule', ['ui.router']);

    crowdModule.config(['$stateProvider', function ($stateProvider)
    {
      var home= {
        url: "",
        templateUrl: 'homeView.html',
        controller: 'homeController',
        controllerAs: 'hmCtrl'
      },
      artist= {
        url: "/artist/:name",
        params: {
            name: 'Norman'
        },
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
        templateUrl: 'cityView.html',
        controller: 'cityController',
        controllerAs: 'ctCtrl'
      };
      $stateProvider.state('home', home)
      .state('artist', artist)
      .state('city', city);
    }]);
})();
