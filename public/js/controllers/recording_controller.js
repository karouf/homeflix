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
      var recording = this.get('model');

      this.store.find('movie', { title: movieTitle }).then(function(movies) {
        var movie = movies.content[0];
        recording.set('movie', movie);
        recording.save();
      });
    },
    unlinkMovie: function() {
      var recording = this.get('model');
      recording.set('movie', null);
      recording.save();
    }
  }
});
