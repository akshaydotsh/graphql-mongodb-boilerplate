const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress }  = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// Database Config
const dbconfig = require('./config/dbconfig');
// Model
const Book = require('./model');
// Schema
const Types = require('./schema');
// Resolver
const Resolver = require('./resolver');


// Initialize Express
const app = express();

// connect to mongodb using mlab
mongoose.connect(dbconfig.database);
var db = mongoose.connection;
db.on('error', (err) => {
    console.log(err);
})
db.once('open', () => {
    console.log("Connected to mongoDB database ...");
});



const Schema = makeExecutableSchema({
    typeDefs: Types,
    resolvers: Resolver
});

app.use(
    '/graphql', 
    bodyParser.json(),
    graphqlExpress({
        schema: Schema,
        context: { Book }
    })
);


app.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql'
    })
);


// Set Port
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started listening on localhost:${PORT}/graphiql`);
});

