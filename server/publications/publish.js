Meteor.publish('about', function() {
	return About.find();
});

Meteor.publish('posts', function() {
	return Posts.find();
});