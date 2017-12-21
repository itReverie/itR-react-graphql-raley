import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql';

let counters=42;

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      counters:{
        type: GraphQLInt,
        resolve: () => counters
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

export default schema;
