Homeflix.Router.map(function() {
  this.resource('movies', { path: '/' });
  this.resource('movie', { path: '/movie/:movie_id' });
  this.resource('files', { path: '/files' });
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

Homeflix.FilesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('file');
  }
});
