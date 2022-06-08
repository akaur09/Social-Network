const {User, Thoughts} = require('../models');
const {user, thoughts} = require('./data')
const connect = require ('../server');

connect.once('open', async => {
    console.log('Database connected');
    await User.deleteMany({});
    await Thoughts.deleteMany({});
    await User.insertMany(user);
    await Thoughts.insertMany(thoughts);
})
console.table(user);
console.table(thoughts);