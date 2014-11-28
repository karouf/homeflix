window.Homeflix = Ember.Application.create();

Homeflix.ApplicationAdapter = DS.FixtureAdapter.extend();

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
