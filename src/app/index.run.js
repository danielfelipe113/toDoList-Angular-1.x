(function() {
  'use strict';

  angular
    .module('listaDeCosasPorHacerAngular1X')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
