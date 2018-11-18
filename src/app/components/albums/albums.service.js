// albums.service.js
(() => {

  angular
    .module('app.components.albums')
    .factory('albumsService', AlbumsService);

  function AlbumsService(apiService) {
    return {
      getAlbums: getAlbums
    };

    ////////////

    function getAlbums() {
      return apiService
        .get('albums', true);
    }
  }

})();
