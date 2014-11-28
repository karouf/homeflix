Homeflix.FileController = Ember.ObjectController.extend({
  hasMovie: function() {
    if(this.get('model').get('movie').get('content') == null) {
      return false;
    } else {
      return true;
    }
  }.property('model.movie')
});
