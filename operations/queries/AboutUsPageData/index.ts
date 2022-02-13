import { gql } from '@apollo/client';

export const GET_ABOUT_US_PAGE_DATA_QUERY = gql`
  query GetAboutUsPageDataQuery {
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

export * from './__generated__/GetAboutUsPageDataQuery';
