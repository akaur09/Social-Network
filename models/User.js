// create model for users
// require mongo to create schema
// create the schema model function called User
    // for username make sure to have:
        // take it in as a string
        // set it to be unique
        // require it
        // trim white space
    // for email:
        // take in in as a string
        // require it
        // set it to be unique
        // use mongoose to validate the email to be an email address
    // for thoughts:
        // have an array of id referencing the Thoughts model
    // for friends
        // have an array of id referencing to the User model
