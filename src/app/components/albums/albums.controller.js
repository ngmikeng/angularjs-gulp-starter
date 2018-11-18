// albums.controller.js
(() => {

  angular
    .module('app.components.albums')
    .controller('AlbumsController', AlbumsController);

  function AlbumsController(albumsService) {
    const vm = this;
    vm.$onInit = onInit;
    vm.albums = null;
    vm.header = 'Albums';

    activate();

    ////////////

    function activate() {
      // Resolve start-up logic
      albumsService.getAlbums()
        .then(albums => {
          vm.albums = albums;
        });
    }

    function onInit() {
      // Initialization logic that relies on bindings being present
      // should be put in this method, which is guarranteed to
      // always be called after the bindings have been assigned.
    }
  }

})();
