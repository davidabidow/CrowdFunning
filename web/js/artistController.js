(function () {
    'use strict';

    angular.module('crowdModule')
        .controller('artistController', artistController);

    artistController.$inject = ['$stateParams', '$http'];

    function artistController($stateParams, $http) {
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
