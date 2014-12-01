Homeflix.Movie = DS.Model.extend({
  title: DS.attr('string'),
  cover: DS.attr('string'),
  recordings: DS.hasMany('recording', {async: true}),
});

Homeflix.Movie.FIXTURES = [
  {
  id: 1,
    title: 'Liberté-Oléron',
    cover: 'liberteoleron.jpg',
    recordings: [ 4 ],
  },
  {
  id: 2,
    title: 'La cité de la peur',
    cover: 'lacitedelapeur.jpg',
    recordings: [],
  },
  {
  id: 3,
    title: 'Predator',
    cover: 'predator.jpg',
    recordings: [],
  },
  {
  id: 4,
    title: 'Home alone',
    cover: 'homealone.jpg',
    recordings: [],
  },
  {
  id: 5,
    title: "Don't be a menace to South Central while drinking your juice in the hood",
    cover: 'dontbeamenace.jpg',
    recordings: [],
  },
  {
  id: 6,
    title: 'Dumb & dumber',
    cover: 'dumbanddumber.jpg',
    recordings: [],
  },
  {
  id: 7,
    title: 'Rambo',
    cover: 'rambo.jpg',
    recordings: [],
  },
  {
  id: 8,
    title: 'Snatch',
    cover: 'snatch.jpg',
    recordings: [],
  },
  {
  id: 9,
    title: 'La jetée',
    cover: null,
    recordings: [],
  },
];
