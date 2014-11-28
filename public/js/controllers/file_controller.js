Homeflix.FileController = Ember.ObjectController.extend({
  hasMovie: function() {
    if(this.get('model').get('movie').get('content') == null) {
      return false;
    } else {
      return true;
    }
  }.property('model.movie'),
  actions: {
    linkMovie: function(movieTitle) {
      var file = this.get('model');

      this.store.find('movie', { title: movieTitle }).then(function(movies) {
        var movie = movies.content[0];
        file.set('movie', movie);
        file.save();
      });
    }
  }
});
