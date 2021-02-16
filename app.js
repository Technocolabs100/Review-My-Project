const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();


const PORT = 5000;

//middleware of  express-handlebars 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
// Database connection
mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});


// Session store
let mongoStore = new MongoDbStore({
                mongooseConnection: connection,
                collection: 'sessions'
            })


app.get('/',(req,res)=>{
    res.render("home");
})

app.post('/edit',(req,res)=>{
    res.send("This is a post method");
})

app.listen(PORT,(req,res)=>{
    console.log(`Listening at port number ${PORT}`);
})