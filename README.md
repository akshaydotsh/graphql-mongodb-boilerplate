# graphql-mongodb-boilerplate


This is a basic implimentation of graphQL backend with mongoDB using Apollo.



To start make an account on **mlab** if you don't have one. Create new MongoDB Deployment by clicking on **Create New** button.
Once you've created a new deployment, create a new **user** for the deployment and copy-paste the MongoDB URI and your secret in 

```
config
  --> databaseconfig.js

```


The URI looks like so :

```
mongodb://<dbuser>:<dbpassword>@ds119160.mlab.com:19160/<dbname>

```


Next, install dependencies and run the server - 


``` 
npm install 
node server.js
``` 



## Querying in GraphiQL

Once the server has started go to 

``` localhost:3000/graphiql```


#### Example queries

###### Mutation :

```
mutation insertMutation {
  insertBook(
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: "1925",
    rating: "3.9/5",
    genre: "Historical Fiction"
  ) {
    id
    name
    author
  }
}
```

###### GET :
```
query getAllBooks {
  books {
    id
    name
    author
    published
    genre
    rating
  }
}
```
