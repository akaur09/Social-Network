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
            type: String,
            // set it to be unique
            unique: true,
            // require it
            required: true,
            // trim white space  
            trim: true
        },
     // for email:
        email: {
            // take in in as a string
            type: String,
            // require it
            required: true,
            // set it to be unique
            unique: true,
            // use mongoose to validate the email to be an email address
            match:  ['Please use a valid email', /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
        },
    // for thoughts:
        Thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }],
    // for friends
        friends: [{
            // have an array of id referencing to the User model
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]  
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const User = Model('User', userSchema);
userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

module.exports = User;     
