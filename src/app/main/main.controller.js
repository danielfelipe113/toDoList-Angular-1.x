(function() {
  'use strict';

  angular
    .module('listaDeCosasPorHacerAngular1X')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.addThing = '';
    vm.things = ['123', '321'];
    vm.completed = ['456', '987'];

    vm.addThingFunction = function () {
      if (vm.addThing) {
        vm.things.push(vm.addThing);
        vm.addThing = '';
      };
    }

    vm.completeThing = function (idx) {
      var completed = vm.things[idx];
      vm.things.splice(idx, 1);
      vm.completed.push(completed);
    }

    vm.deleteThing = function (idx) {
      vm.completed.splice(idx, 1);
    }

    vm.makeItThing = function (idx) {
      var toDoAgain = vm.completed[idx];
      vm.completed.splice(idx, 1);
      vm.things.push(toDoAgain);
    }

   }
})();
