const { ApolloServer} = require('apollo-server');



const resolvers = require('./graphqp/resolvers')
const typeDefs = require('./graphqp/typeDefs')

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});