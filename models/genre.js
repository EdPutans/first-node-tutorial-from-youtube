let mongoose = require('mongoose')

// Genre Schema

let genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    create_date:{
        type: Date,
        default: Date.now
    }  
})

let Genre = module.exports = mongoose.model('Genre', genreSchema)

// Get Genres
module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit)
}

module.exports.getGenreById = (id, callback) => {
    Genre.findById(id, callback)
}

module.exports.addGenre = (genre, callback) => {
    Genre.create(genre, callback)
}

// update 

module.exports.updateGenre = (_id, genre, options, callback ) => {
    const query = { _id }
    const update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback)
}

module.exports.removeGenre = ( id ,callback ) =>{
    Genre.remove({_id:id} ,callback)
}