Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading',
  layoutTemplate: 'appLayout',
  waitOn: function() {
    return Meteor.subscribe('posts');
  },
  fastRender: true
});

Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});
