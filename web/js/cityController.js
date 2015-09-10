(function () {
    'use strict';

    angular.module('crowdModule')
        .controller('cityController', cityController);

    cityController.$inject = ['$stateParams', '$http'];

    function cityController($stateParams, $http) {
        var vm = this;
        vm.artname = $stateParams.name;

        $http.get('ville.json').success(function(responses) {
          angular.forEach(responses, function(response, key) {
            if (response.name === vm.artname)
              vm.city = response;
          })
        });

        $http.get('artiste.json').success(function(response) {
          vm.artists = response;
        });
    }
}());
