Homeflix.MovieController = Ember.ObjectController.extend({
  coverUrl: function() {
    var model = this.get('model');
    return '/img/' + model.get('cover');
  }.property('model.cover')
});
