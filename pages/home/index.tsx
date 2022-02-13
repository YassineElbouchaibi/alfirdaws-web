import { Grid } from '@mui/material';
import type { NextPage } from 'next';

import BannerWidget from '../../components/BannerWidget';
import NewsWidget from '../../components/NewsWidget';
import { GET_HOME_PAGE_DATA_QUERY, GetHomePageDataQuery } from '../../operations/queries/HomePageData';
import client from '../../utility/apollo-client';

interface Props {
  bannerImageUrl: string;
  logoImageUrl: string;
  announcements: NonNullable<GetHomePageDataQuery['announcements']>;
}

const Home: NextPage<Props> = ({ bannerImageUrl, announcements }) => {
  return (
    <Grid container direction={'column'} rowSpacing={2.5}>
      <Grid item>
        <BannerWidget bannerImageUrl={bannerImageUrl} />
      </Grid>
      <Grid item>
        <NewsWidget announcements={announcements} />
      </Grid>
    </Grid>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<GetHomePageDataQuery>({
    query: GET_HOME_PAGE_DATA_QUERY,
    variables: {
      locale: 'en', // TODO: get locale from cookie
      pagination: {
        limit: 5,
      },
      sort: ['publishedAt:desc'],
    },
  });

  if (data == null) {
    throw new Error('No data');
  }

  const bannerImageUrl = data.asset?.banner?.url;
  const logoImageUrl = data.asset?.logo?.url;
  const announcements = data.announcements;

  if (bannerImageUrl == null || logoImageUrl == null) {
    throw new Error('No image url');
  }

  if (announcements == null) {
    throw new Error('No announcements');
  }

  return {
    props: {
      bannerImageUrl,
      logoImageUrl,
      announcements,
    },
  };
}

export default Home;
