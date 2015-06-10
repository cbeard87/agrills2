Home = new Mongo.Collection('home');

var homeSchema = new SimpleSchema({
    heading: {
        // Labels are used to reffer to this field in validation
        label: 'Heading',
        // Specifying the allowed type
        type: String,
        max: 10
    },
    subHeading: {
        label: 'Sub-Heading',
        type: String,
        max: 40
    },
    content: {
        label: 'Content',
        type: String,
        //This is needed for the Materialize theme, more on this later
        autoform: {
            type: 'textarea',
            rows: 10
        }
    }
});

Home.attachSchema(homeSchema);