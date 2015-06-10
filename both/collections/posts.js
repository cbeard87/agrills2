Posts = new Mongo.Collection('posts');

var postSchema = new SimpleSchema({
    postTitle: {
        // Labels are used to reffer to this field in validation
        label: 'Post Title',
        // Specifying the allowed type
        type: String
    },
    postDescription: {
        label: 'Post Description',
        type: String,
        max: 140
    },
    postContent: {
        label: 'Post Content',
        type: String
    },  
    postAuthor: {
    		label: 'Post Author',
    		type: String,
            autoValue: function() {
                return Meteor.user().profile.name;
            }
    },
    postDate: {
    		label: 'Post Date',
    		type: Date,
            autoValue: function() {
                return new date();
            }
    },
    postSlug: {
    		label: 'Post Slug',
    		type: String,
            autoValue: function(doc) {
                return this.field('postTitle')
                    .toLowerCase()
                    .replace(/[^\w ]+/g,'')
                    .replace(/ +/g,'-');
                
            }
    },
    postTags: {
    		label: 'Post Tags',
    		type: String
    }
});

Posts.attachSchema(postSchema);