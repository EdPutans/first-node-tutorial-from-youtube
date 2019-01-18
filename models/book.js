let mongoose = require('mongoose')

// Book Schema

let bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre:{
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

let Book = module.exports = mongoose.model('Book', bookSchema)

// Get Books
module.exports.getBooks = (callback, limit) => {
    Book.find(callback).limit(limit)
}

module.exports.getBookById = (id, callback) => {
    Book.findById(id,callback)
}
// add book
module.exports.addBook = (book, callback) => {
    Book.create(book, callback)
}

// update

module.exports.updateBook = (_id, book, options, callback) => {
    const query = { _id: _id }
    const update = {
        title: book.title,
        genre: book.genre
    }
    Book.findOneAndUpdate(query, update, options, callback)
}

module.exports.removeBook = (id, callback) => {
    Book.remove({ _id: id }, callback)
}