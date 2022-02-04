import { gql } from '@apollo/client';

export const GET_ASSETS_QUERY = gql`
  query GetAssetsQuery {
    asset {
      banner {
        url
      }
      logo {
        url
      }
    }
  }
`;
