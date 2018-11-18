// albums.component.js
(() => {

  angular
    .module('app.components.albums')
    .component('albums', {
      controller: 'AlbumsController',
      controllerAs: 'vm',
      templateUrl: 'app/components/albums/albums.html'
    });

})();
