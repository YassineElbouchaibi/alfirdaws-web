import { gql } from '@apollo/client';

export const GET_HOME_PAGE_DATA_QUERY = gql`
  query GetHomePageDataQuery($locale: I18NLocaleCode!, $pagination: PaginationArg!, $sort: [String]!) {
    asset {
      banner {
        url
      }
      logo {
        url
      }
    }

    announcements(locale: $locale, pagination: $pagination, sort: $sort) {
      title
      description
      publishedAt
      icon {
        url
      }
      locale
    }
  }
`;
