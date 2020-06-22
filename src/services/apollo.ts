import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const cache = new InMemoryCache();

const link = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI
});

const aClient = new ApolloClient({
    link,
    cache
});

export default aClient;