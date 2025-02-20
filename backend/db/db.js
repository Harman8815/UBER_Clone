const mongoose = require('mongoose');
function connectToDb(){
    const uri = process.env.DB_CONNECT;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => console.log("Connected to MongoDB"))
       .catch(err => console.error("Connection failed", err));
}
export default connectToDb;