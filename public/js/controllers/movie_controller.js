Homeflix.MovieController = Ember.ObjectController.extend({
  coverUrl: function() {
    var model = this.get('model');
    return '/assets/covers/' + model.get('cover');
  }.property('model.cover')
});
