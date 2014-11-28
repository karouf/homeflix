window.Homeflix = Ember.Application.create();

Homeflix.ApplicationAdapter = DS.FixtureAdapter.extend({
  queryFixtures: function(records, query, type) {
    return records.filter(function(record) {
      for(var key in query) {
        if (!query.hasOwnProperty(key)) { continue; }
        var value = query[key];
        if (record[key] !== value) { return false; }
      }
      return true;
    });
  }
});

Homeflix.navbarCollapse = function() {
  var navHeight = $('.navbar-collapse').height();

  $('.navbar-collapse').on('show.bs.collapse', function(){
      if($(this).height() != 0){
      navHeight = $(this).height();
      }
      $('body').animate({
        'padding-top': parseInt($("body").css("padding-top")) + navHeight
        }, 300);
      });

  $('.navbar-collapse').on('hide.bs.collapse', function(){
      navHeight = $(this).height();
      $('body').animate({
        'padding-top': parseInt($("body").css("padding-top")) - navHeight
        }, 300);
      });
}

Ember.View.reopen({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', Ember.View, 'afterRenderEvent');
  }
});

Ember.View.reopenClass({
  afterRenderEvent : function(){
    Homeflix.navbarCollapse();
  }
});
