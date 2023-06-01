//Import the mongoose package (an Object Data Modeling (ODM) library for MongoDB). 
//It allows you to interact with MongoDB in a more convenient and structured way.
//When you establish a connection to MongoDB using Mongoose and specify a database name that doesn't exist yet, MongoDB will automatically create the database for you
const mongoose = require('mongoose');

//establishes a connection to a MongoDB database hosted on the local machine (localhost) at port 27017. The database name is antisocialNetworkDB.
mongoose.connect('mongodb://localhost:27017/antisocialNetworkDB', {
  //tells Mongoose to use the new URL parser.  
  useNewUrlParser: true,
  //enables the new Server Discovery and Monitoring engine
  useUnifiedTopology: true,
})

// Export connection 
// By exporting this object= can import and use it in other parts of application, such as defining models or performing database operations.
module.exports = mongoose.connection;