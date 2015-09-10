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
        templateUrl: 'artistView.html',
      },
      city= {
        url: '/city/:name',
        templateUrl: 'cityView.html'
      };
      $stateProvider.state('home', home)
      .state('artist', artist)
      .state('city', city);
    }]);
})();
