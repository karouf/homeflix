Homeflix.Router.map(function() {
  this.resource('movies', { path: '/' });
  this.resource('movie', { path: '/movie/:movie_id' });
  this.resource('recordings', { path: '/recordings' });
});

Homeflix.MoviesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('movie');
  }
});

Homeflix.MovieRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('movie', params.movie_id);
  }
});

Homeflix.RecordingsRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      recordings: this.store.find('recording'),
      movies: this.store.find('movie'),
    });
  }
});
