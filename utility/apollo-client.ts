import getConfig from 'next/config';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const {
  publicRuntimeConfig: { cmsUri },
} = getConfig();

const client = new ApolloClient({
  uri: `${cmsUri}/graphql`,
  headers: {
    normalize: 'true',
  },
  cache: new InMemoryCache(),
});

export default client;
