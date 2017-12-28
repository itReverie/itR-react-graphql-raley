import fs from 'fs';
import express from 'express';
import Schema from './data/schema';
import { MongoClient} from 'mongodb';
import GraphQLHTTP from 'express-graphql';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';



let app = express();

app.use(express.static('public'));

//This is an option to keep the db obfuscated
//console.log(process.env.MONGO_URL); //process.env.MONGO_URL

let connection="mongodb://brenda.levvel10:brenda.levvel10@ds161146.mlab.com:61146/links";
//We converted our aynchronous call to mongo into an ****AsyncAwait*** feature
(async()=> {
let db= await MongoClient.connect(connection);
let schema= Schema(db.db("links"));
//console.log(schema);
    //Passing the connected db variabel as an argument
    //I will have access to my mongo DB in our Graph ql schema
    app.use('/graphql', GraphQLHTTP({
      schema: schema,
      graphiql: true
    }));

    app.listen(3000, () => console.log('Listening on port 3000'));




// //This will probably not be the best place to set up the schema as it will be updated everytime we start the server
// //We will leave it here to keep it simple in this case
// //Generate a Schema
//  let json= await graphql(schema, introspectionQuery); //this is an async call hence we just add the await
// // //We are writing this json to a file
// console.log(json);
//  fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err =>{
//    if(err) throw err;
//
//    console.log("JSON schema created");
//  });

})();
