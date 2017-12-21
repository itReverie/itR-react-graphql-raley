import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import { MongoClient} from 'mongodb';


let app = express();



app.use(express.static('public'));

app.use('/graphql', GraphQLHTTP({
  schema
}));

//This is an option to keep the db obfuscated
//console.log(process.env.MONGO_URL); //process.env.MONGO_URL,


let connection="mongodb://brenda.levvel10:brenda.levvel10@ds161146.mlab.com:61146/links";
let myDb;
MongoClient.connect( connection, (err, database) => {
    if(err) throw err;

    myDb=database.db("links");
    app.listen(3000, () => console.log('Listening on port 3000'));

});

app.get("/links/links", (req, res) => {
    myDb.collection("links").find({}).toArray((err, links) => {
        if(err)throw err;

        res.json(links);
    });
});
