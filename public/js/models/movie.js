Homeflix.Movie = DS.Model.extend({
  title: DS.attr('string'),
  cover: DS.attr('string'),
});

Homeflix.Movie.FIXTURES = [
  {
  id: 1,
    title: 'Liberté-Oléron',
    cover: 'liberteoleron.jpg',
  },
  {
  id: 2,
    title: 'La cité de la peur',
    cover: 'lacitedelapeur.jpg',
  },
  {
  id: 3,
    title: 'Predator',
    cover: 'predator.jpg',
  },
  {
  id: 4,
    title: 'Home alone',
    cover: 'homealone.jpg',
  },
  {
  id: 5,
    title: "Don't be a menace to South Central while drinking your juice in the hood",
    cover: 'dontbeamenace.jpg',
  },
  {
  id: 6,
    title: 'Dumb & dumber',
    cover: 'dumbanddumber.jpg',
  },
  {
  id: 7,
    title: 'Rambo',
    cover: 'rambo.jpg',
  },
  {
  id: 8,
    title: 'Snatch',
    cover: 'snatch.jpg',
  },
];
