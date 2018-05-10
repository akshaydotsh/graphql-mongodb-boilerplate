module.exports = `

    type Query {
        book(id: String!): Book
        books: [Book!]!
    }

    type Book {
        id: String!
        name: String
        author: String
        published: String
        genre: String
        rating: String
    }

    type Mutation {
        insertBook(
            name: String!,
            author: String!,
            published: String!,
            genre: String,
            rating: String
        ): Book!
    }

`