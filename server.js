// require express
const express = require('express');
// require mongoose
const mongoose = require('mongoose');
// create a port to listen to
const PORT = process.env.PORT || 3000;
// use express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(require('./routes'));
// connect mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost-Social-Network',{
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology:true
})
// log mongoose queries
mongoose.set('debug', true);
// have app listen
app.listen(PORT, ()=> console.log(`connected to server on local host on ${PORT}`));