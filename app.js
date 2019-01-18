let express = require('express')
let app = express();
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

Genre = require('./models/genre.js');

// connect to mongoose db
mongoose.connect('mongodb://localhost/bookstore')
let db = mongoose.connection


app.get('api/genres/', (req,res)=>{

})
app.get('/', function(request, response){
    response.send('Please use /api/books or /api/genres!')
})

app.listen(3000)
console.log('Running on port 3000')
