(function () {
    'use strict';

    angular.module('crowdModule')
        .controller('homeController', homeController);

    homeController.$inject = ['$http'];

    function homeController($http) {
        var vm = this;
        vm.active = true;
        vm.triggerActive = triggerActive;
        $http.get('artiste.json').success(function(response) {
          vm.artists = response;
        });
        function triggerActive(option)
        {
          vm.active = option;
        }
    }
}());
