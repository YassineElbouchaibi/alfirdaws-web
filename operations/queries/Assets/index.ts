import { gql } from '@apollo/client';

export const GET_ASSETS_QUERY = gql`
  query GetAssetsQuery {
    asset {
      data {
        attributes {
          banner {
            data {
              attributes {
                url
              }
            }
          }
          logo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export * from './__generated__/GetAssetsQuery';
