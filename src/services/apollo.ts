import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const httLink = new HttpLink({
    uri: 'https://api.graphql.jobs/'
});

const aClient = new ApolloClient({
    link: httLink,
    cache: new InMemoryCache()
});

export default aClient;