// posts.controller.js
(() => {
  angular
    .module('app.components.posts')
    .controller('PostsController', PostsController);

  function PostsController(postsService) {
    const vm = this;
    vm.$onInit = onInit;
    vm.header = 'Posts';
    vm.posts = null;

    activate();

    ////////////

    function activate() {
      // Resolve start-up logic
      postsService.getPosts()
        .then(posts => {
          vm.posts = posts;
        });
    }

    function onInit() {
      // Initialization logic that relies on bindings being present
      // should be put in this method, which is guarranteed to
      // always be called after the bindings have been assigned.
    }
  }

})();
