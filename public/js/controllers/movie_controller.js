Homeflix.MovieController = Ember.ObjectController.extend({
  coverUrl: function() {
    var model = this.get('model');
    var cover = model.get('cover');

    if(cover == null) { cover = 'placeholder.gif' }

    return '/assets/covers/' + cover;
  }.property('model.cover')
});
