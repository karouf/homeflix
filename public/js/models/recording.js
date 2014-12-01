Homeflix.Recording = DS.Model.extend({
  filename: DS.attr('string'),
  movie: DS.belongsTo('movie', {async: true}),
});

Homeflix.Recording.FIXTURES = [
  {
  id: 1,
    filename: 'napoleon-dynamite.mp4',
    movie: null,
  },
  {
  id: 2,
    filename: '[YEAH].any.given.sunday-FR.mkv',
    movie: null,
  },
  {
  id: 3,
    filename: 'xor-lgd-lca.avi',
    movie: null,
  },
  {
  id: 4,
    filename: 'liberte-oleron-filmdevacances.avi',
    movie: 1,
  },
];
