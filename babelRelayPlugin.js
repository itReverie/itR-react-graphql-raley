var getBabelRelayPlugin = require('babel-plugin-relay');

//This is the schema.json file that was geneerated via the
//console.log Graphql to generate the file so now we can read it
var schemaData= require('./data/schema.json').data.__schema;
module.exports=getBabelRelayPlugin(schemaData  , {abortOnError: true});
