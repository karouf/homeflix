Homeflix.MoviesController = Ember.ArrayController.extend({
  filter: null,
  filterMovies: function() {
    this.set('filter', this.get('query'));
  }.observes('query'),

  filteredMovies: function() {
    var query = this.get('filter');
    if (!query) { return this.get('content') }

    return this.get('content').filter(function(movie) {
      return movie.get('title').toLowerCase().indexOf(query.toLowerCase()) != -1;
    })
  }.property('content', 'filter')
});
