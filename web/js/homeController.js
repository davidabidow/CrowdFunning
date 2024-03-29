(function () {
    'use strict';

    angular.module('crowdModule')
        .controller('homeController', homeController);

    homeController.$inject = ['$http', '$rootScope'];

    function homeController($http, $rootScope) {
        var vm = this;
        vm.active = 0;
        vm.triggerActive = triggerActive;
        $http.get('artiste.json').success(function(response) {
          vm.artists = response;
        });
        $http.get('ville.json').success(function(response) {
            vm.cities = response;
        });
        function triggerActive(option)
        {
            vm.active = option;
        }
    }
}());
