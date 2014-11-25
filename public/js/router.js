Homeflix.Router.map(function() {
  this.resource('movies', { path: '/' });
});

Homeflix.MoviesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('movie');
  }
});
