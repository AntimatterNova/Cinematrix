// import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Main from './components/Main';
import Movie from './components/Movie';
import Row from './components/Row';
import MovList from './components/SavedMovies';

const link = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
 
  const token = localStorage.getItem('id_token');
 
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='bg-gray-800'>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;