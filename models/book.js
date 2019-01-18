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