// home.controller.js
(() => {

  angular
    .module('app.components.home')
    .controller('HomeController', HomeController);

  function HomeController() {
    const vm = this;
    vm.header = 'Home sweet home!';
    vm.$onInit = onInit;

    activate();

    ////////////

    function activate() {
      // Resolve start-up logic
    }

    function onInit() {
      // Initialization logic that relies on bindings being present
      // should be put in this method, which is guarranteed to
      // always be called after the bindings have been assigned.
    }
  }

})();
