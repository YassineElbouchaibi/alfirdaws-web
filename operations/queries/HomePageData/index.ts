import { gql } from '@apollo/client';

export const GET_HOME_PAGE_DATA_QUERY = gql`
  query GetHomePageDataQuery($locale: I18NLocaleCode!, $pagination: PaginationArg!, $sort: [String]!) {
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

    announcements(locale: $locale, pagination: $pagination, sort: $sort) {
      data {
        attributes {
          title
          description
          publishedAt
          icon {
            data {
              attributes {
                url
              }
            }
          }
          locale
        }
      }
    }
  }
`;

export * from './__generated__/GetHomePageDataQuery';
