import { ApolloClient, InMemoryCache } from '@apollo/client';
import getAbsoluteCmsUrl from './getAbsoluteCmsUrl';

const client = new ApolloClient({
  uri: getAbsoluteCmsUrl('/graphql'),
  headers: {
    normalize: 'true',
  },
  cache: new InMemoryCache(),
});

export default client;
