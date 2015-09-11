(function () {
    'use strict';

    angular.module('crowdModule')
        .controller('artistController', artistController);

    artistController.$inject = ['$stateParams', '$http', '$rootScope'];

    function artistController($stateParams, $http, $rootScope) {
        var vm = this;
        vm.artname = $stateParams.name;
        $http.get('artiste.json').success(function(responses) {
          angular.forEach(responses, function(response, key) {
            if (response.name === vm.artname)
              vm.artist = response;
          })
        });
    }
}());
