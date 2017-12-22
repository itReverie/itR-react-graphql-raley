import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import { MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));

//This is an option to keep the db obfuscated
//console.log(process.env.MONGO_URL); //process.env.MONGO_URL

let connection="mongodb://brenda.levvel10:brenda.levvel10@ds161146.mlab.com:61146/links";
//We converted our aynchronous call to mongo into an ****AsyncAwait*** feature
(async()=> {
let db= await MongoClient.connect(connection);

    //Passing the connected db variabel as an argument
    //I will have access to my mongo DB in our Graph ql schema
    app.use('/graphql', GraphQLHTTP({
      schema: schema(db.db("links")),
      graphiql: true
    }));

    app.listen(3000, () => console.log('Listening on port 3000'));

})();


// let myDb;
// MongoClient.connect( connection, (err, database) => {
//     if(err) throw err;
//
//     myDb=database.db("links");
//
//     XXXXXXX
//
// });






//Replacing this section with *****Graphql**** instead of retrieving them directly
// app.get("/links/links", (req, res) => {
//     myDb.collection("links").find({}).toArray((err, links) => {
//         if(err)throw err;
//
//         res.json(links);
//     });
// });
