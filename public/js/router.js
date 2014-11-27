Homeflix.Router.map(function() {
  this.resource('movies', { path: '/' });
  this.resource('files', { path: '/files' });
});

Homeflix.MoviesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('movie');
  }
});

Homeflix.FilesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('file');
  }
});
