const mongoose = require("mongoose");

const uri = process.env.mongo_uri;

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
  console.log(`Database handshake successful. Connection established.`)
}).catch(err=>{
  console.log(`db error ${err.message}`);
  process.exit(-1)
});

//add some logs for connection status
mongoose.connection.on('connected', () => {
  console.log(`Mongoose is now connected to uri: ${uri}`);
});
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
}); 