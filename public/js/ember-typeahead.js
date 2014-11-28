(function(root, undefined) {
  "use strict";
  Ember.TypeAheadComponent = Ember.TextField.extend({
      
    didInsertElement: function() {
      this._super();
      var _this = this;
      
      if(!this.get("data")){
        throw "No data property set";
      }

      if (jQuery.isFunction(this.get("data").then)){
        this.get("data").then(function(data) {
          _this.initializeTypeahead(data);
        });
      }

      else{
        this.initializeTypeahead(this.get("data"));
      }

    },

    substringMatcher: function(objects, method) {
      return function findMatches(q, cb) {
        var matches, substrRegex;

        // an array that will be populated with substring matches
        matches = [];

        // regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

        // iterate through the pool of strings and for any string that
        // contains the substring `q`, add it to the `matches` array
        $.each(objects, function(i, object) {
          if (substrRegex.test(object.get(method))) {
          // the typeahead jQuery plugin expects suggestions to a
          // JavaScript object, refer to typeahead docs for more info
          matches.push({value: object.get(method)});
          }
        });

        cb(matches);
      };
    },

    initializeTypeahead: function(data){
      var _this = this;

      this.typeahead = this.$().typeahead(
        {
          highlight: true,
        },
        {
          source: this.substringMatcher(data, _this.get('name')),
        }
      );

      this.typeahead.on("typeahead:selected", function(event, item) {
        _this.set("selection", item.emberObject);
      });

      this.typeahead.on("typeahead:autocompleted", function(event, item) {
        _this.set("selection", item.emberObject);
      });

      if (this.get("selection")) {
        this.typeahead.val(this.get("selection.name"));
      }
    },
    
    selectionObserver: function() {
      if (Ember.isEmpty(this.get('selection')) === true) {
        return this.typeahead.val('');
      }
      return this.typeahead.val(this.get("selection").get(this.get("name")));
    }.observes("selection")

  });
  Ember.Handlebars.helper('type-ahead', Ember.TypeAheadComponent);
}(this));
