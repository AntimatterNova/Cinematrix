const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    savedMovies: [Movie]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Movie {
    movieId: ID!
    title: String
    directors : [String]
    description: String
    image: String
    link: String
  }

  input MovieInput{
    movieId: ID!
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!,email: String!, password: String!): Auth
    saveMovie(newMovie: MovieInput!): User
    removeMovie(movieId: ID!): User
  }
`;

module.exports = typeDefs;