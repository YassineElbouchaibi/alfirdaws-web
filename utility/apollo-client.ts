import { ApolloClient, DefaultOptions, InMemoryCache } from '@apollo/client';

import getAbsoluteCmsUrl from './getAbsoluteCmsUrl';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  uri: getAbsoluteCmsUrl('/graphql'),
  headers: {
    normalize: 'true',
  },
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export default client;
