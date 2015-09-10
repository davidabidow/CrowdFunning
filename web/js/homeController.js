(function () {
    'use strict';

    angular.module('crowdModule')
        .controller('homeController', homeController);

    function homeController() {
        var vm = this;
        vm.active = true;
        vm.triggerActive = triggerActive;
        function triggerActive(option)
        {
          vm.active = option;
        }
    }
}());
