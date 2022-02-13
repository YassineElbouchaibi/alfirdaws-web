import { gql } from '@apollo/client';

export const GET_ABOUT_US_PAGE_DATA_QUERY = gql`
  query GetAboutUsPageDataQuery {
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
