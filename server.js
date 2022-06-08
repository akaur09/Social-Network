// require express
const express = require('express');
// require mongoose
const mongoose = require('mongoose');
// connect mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost-Social-Network',{
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology:true
})
// log mongoose queries
// have app listen