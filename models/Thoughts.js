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
     }

     // have a created at 
        // have the date
        // set it to default to current timestamp
        // use a get method to format the timestamp
     // username
        // take it in as a string
        // require it
    }
)

    // reactions
        // take in an array that is created with the reaction schema