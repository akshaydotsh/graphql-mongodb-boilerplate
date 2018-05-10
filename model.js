const mongoose = require('mongoose');

const Book = mongoose.model('Book', new mongoose.Schema({

    name: String,
    author: String,
    rating: String,
    published: String,
    genre: String

}));

module.exports = Book;