// create model for users
// require mongo to create schema
const {Schema, Model} = require('mongoose');
const { User } = require('.');
// create the schema model function called User
const userSchema = new Schema(
    {
        // for username make sure to have:
        username:{
            // take it in as a string

            // set it to be unique
            // require it
            // trim white space  
        },
     // for email:
        email: {
            // take in in as a string
            // require it
            // set it to be unique
            // use mongoose to validate the email to be an email address
        },
    // for thoughts:
        Thoughts: {
            // have an array of id referencing the Thoughts model
        },
    // for friends
        friends: {
            // have an array of id referencing to the User model
        }
        
    }
)
module.exports = User;     
