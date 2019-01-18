let express = require('express')
let app = express();
let bodyParser = require('body-parser')
let mongoose = require('mongoose')

const Genre = require('./models/genre');
const Book = require('./models/book');

// connect to mongoose db
mongoose.connect('mongodb://localhost/bookstore')
let db = mongoose.connection


app.get('/api/genres/', (req,res)=>{
    Genre.getGenres((err,genres)=>{
        if(err){
            throw err
        }
        res.json(genres)
    })
})

app.get('/api/books/', (req, res) => {
    Book.getBooks((err, books) => {
        if (err) {
            throw err
        }
        res.json(books)
    })
})


app.get('/', function(request, response){
    response.send('Please use /api/books or /api/genres!')
})

app.listen(3000)
console.log('Running on port 3000')


// by id:

app.get('/api/books/:_id', (req, res) => {
    Book.getBookById(req.params._id, (err, book) => {
        if (err) {
            throw err
        }
        res.json(book)
    })
})

app.get('/api/genres/:_id', (req, res) => {
    Genre.getGenreById(req.params._id, (err, genre) => {
        if (err) {
            throw err
        }
        res.json(genre)
    })
})