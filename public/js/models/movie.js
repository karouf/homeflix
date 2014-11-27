Homeflix.Movie = DS.Model.extend({
  title: DS.attr('string'),
  cover: DS.attr('string'),
  files: DS.hasMany('file', {async:true}),
});

Homeflix.Movie.FIXTURES = [
  {
  id: 1,
    title: 'Liberté-Oléron',
    cover: 'liberteoleron.jpg',
    files: [ 4 ],
  },
  {
  id: 2,
    title: 'La cité de la peur',
    cover: 'lacitedelapeur.jpg',
    files: [],
  },
  {
  id: 3,
    title: 'Predator',
    cover: 'predator.jpg',
    files: [],
  },
  {
  id: 4,
    title: 'Home alone',
    cover: 'homealone.jpg',
    files: [],
  },
  {
  id: 5,
    title: "Don't be a menace to South Central while drinking your juice in the hood",
    cover: 'dontbeamenace.jpg',
    files: [],
  },
  {
  id: 6,
    title: 'Dumb & dumber',
    cover: 'dumbanddumber.jpg',
    files: [],
  },
  {
  id: 7,
    title: 'Rambo',
    cover: 'rambo.jpg',
    files: [],
  },
  {
  id: 8,
    title: 'Snatch',
    cover: 'snatch.jpg',
    files: [],
  },
  {
  id: 9,
    title: 'La jetée',
    cover: null,
    files: [],
  },
];
