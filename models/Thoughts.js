// call on shema and mongo to create model
const {Schema , Model , Types} = require('mongoose');
// create a schema model function called Thoughts
const thoughtsSchema = new Schema(
    {
     // for thought text 
        thoughtsText: {
            // take it in as a string
            type: String,
            // make it required
            required: true,
            // limit the charaters to be w/in 1-280
            maxlength: 280
        },
     // have a created at 
        createdAt: {
            // have the date
            type: Date,
            // set it to default to current timestamp
            default: Date.now
            // use a get method to format the timestamp
        },
     // username
        username: {
            // take it in as a string
            type: String,
            // require it
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

const reactionSchema = new Schema (
    {
        // reaction id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        // code reaction body
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        }
    }
)
    // reactions
        // take in an array that is created with the reaction schema