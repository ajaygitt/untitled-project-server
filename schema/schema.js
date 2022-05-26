
const graphql = require("graphql"); //use graphql package

/*Getting GraphQLObjectType function from 'graphql' to define the (dataType) 
 structure of our queries and their model type.
*/
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;




//Defining CarType with its fields.
const CarType = new GraphQLObjectType({
    name: "Car",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      model: { type: GraphQLInt },
      company: { type: GraphQLString }
    })
  });