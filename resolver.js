module.exports = {

    Query: {
        books: async (parent, args, { Book }) => {
            const books = await Book.find({});
            return books.map((book) => {
                book._id = book._id.toString();
                return book;
            });
        }
    },
    Mutation: {
        insertBook: async (parent, args, { Book }) => {
            const book = await Book(args).save();
            book._id = book._id.toString();
            return book;
        }
    }
}