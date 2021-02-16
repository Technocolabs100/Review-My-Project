require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = () =>{
    // Database Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true,  useCreateIndex:true, useFindAndModify:true});

    const connection = mongoose.connection;

    connection.once('open', ()=>{
        console.log('Database Connected');
    }).catch(err =>{
        console.log("Conncetion failed !");
    })

}

module.exports = connectDB;