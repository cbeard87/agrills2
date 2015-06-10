//User Routes

Router.route('/', {
  name: 'home'
});

Router.route('/about', {
  name: 'about',
  waitOn: function() {
  	return Meteor.subscribe('about');
  },
  data: function() {
  	return About.findOne();
  }
});

Router.route('/blog', {
  name: 'blog',
  data: function() {
    return Posts.find();
  }
});

Router.route('/contact', {
  name: 'contact'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});

//Administrator Routes

Router.route('/dashboard', {
  name: 'dashboard',
  layoutTemplate: 'adminLayout'
});

Router.route('/admin-blog', {
  name: 'adminBlog',
  layoutTemplate: 'adminLayout'
});

Router.route('/admin-profile', {
  name: 'adminProfile',
  layoutTemplate: 'adminLayout'
});

Router.route('/admin-uploads', {
  name: 'adminUploads',
  layoutTemplate: 'adminLayout'
});

Router.route('/admin-settings', {
  name: 'adminSettings',
  layoutTemplate: 'adminLayout'
});