import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString
} from 'graphql';


let Schema =(db) => {
  let data=[42,43,44];


  let linkType=new GraphQLObjectType({
    name:'Link',
    fields: ()=> ({
      _id:{type: GraphQLString},
      title:{type: GraphQLString},
      url: {type: GraphQLString}
    })
  });

  let counterType=new GraphQLObjectType({
    name:'Counter',
    fields: ()=> ({counter:{type: GraphQLInt}})
  });

  let dataObjects=[
    {counter:42},
    {counter:43},
    {counter:44}
  ];

  let schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        data:{
          type: GraphQLList(GraphQLInt),
          resolve: () => data
        },
        dataObjects:{
          type: GraphQLList(counterType),
          resolve: () => dataObjects
        },
        links:{
          type: GraphQLList(linkType),
          resolve: () => db.collection("links").find({}).toArray()
          //It supports promises out of the box. You dont need to manage how to resolve it or rejected
          //Todo: read from mongo
        },
        message:{
          type: GraphQLString,
          resolve: () => "hello GraphQL"
        }
      })
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: ()=> ({
        incrementCounter:{
          type: GraphQLInt,
          resolve: ()=> ++counters
        }
      })
    })
  });

  return schema;
};

export default Schema;
