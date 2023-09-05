import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
mutation login($email: String!, 
  $password: String!
  ) {
    login(
      email: $email, 
      password: $password
      ) {
      token
      user {
        _id
        username
      }
    }
  }
`

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
  `

export const SAVE_MOVIE = gql`
mutation SaveMovie($newMovie: MovieInput!) {
    saveMovie(newMovie: $newMovie) {
      _id
      username
      email
      savedMovies {
        movieId
        title
        directors
        description
        image
        link
      }
    }
  }
`

export const REMOVE_MOVIE = gql`
mutation Mutation($movieId: ID!) {
    removeMovie(movieId: $movieId) {
      _id
      username
      email
      savedMovies {
        movieId
        title
        directors
        description
        image
        link
      }
    }
  }
`