Homeflix.RecordingController = Ember.ObjectController.extend({
  hasMovie: function() {
    if(this.get('model').get('movie').get('content') == null) {
      return false;
    } else {
      return true;
    }
  }.property('model.movie'),
  actions: {
    linkMovie: function(movieTitle) {
    var store = this.store;
      var recording = this.get('model');

      store.find('movie', { title: movieTitle }).then(function(movies) {
        if(movies.content.length == 0) {
          var movie = store.createRecord('movie', {title: movieTitle});
          movie.save().then(function(movie) {
            recording.set('movie', movie);
            recording.save();
          });
        } else {
          var movie = movies.content[0];
          recording.set('movie', movie);
          recording.save();
        }
      });
    },
    unlinkMovie: function() {
      var recording = this.get('model');
      recording.set('movie', null);
      recording.save();
    }
  }
});
