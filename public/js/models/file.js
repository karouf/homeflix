Homeflix.File = DS.Model.extend({
  name: DS.attr('string'),
  movie: DS.belongsTo('movie', {async: true}),
});

Homeflix.File.FIXTURES = [
  {
  id: 1,
    name: 'napoleon-dynamite.mp4',
    movie: null,
  },
  {
  id: 2,
    name: '[YEAH].any.given.sunday-FR.mkv',
    movie: null,
  },
  {
  id: 3,
    name: 'xor-lgd-lca.avi',
    movie: null,
  },
  {
  id: 4,
    name: 'liberte-oleron-filmdevacances.avi',
    movie: 1,
  },
];
