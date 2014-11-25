Homeflix.Movie = DS.Model.extend({
  title: DS.attr('string'),
  cover: DS.attr('string'),
});

Homeflix.Movie.FIXTURES = [
  {
  id: 1,
    title: 'Liberté-Oléron',
    cover: 'cover-placeholder.gif',
  },
  {
  id: 2,
    title: 'La cité de la peur',
    cover: 'cover-placeholder.gif',
  },
  {
  id: 3,
    title: 'Predator',
    cover: 'cover-placeholder.gif',
  }
];
