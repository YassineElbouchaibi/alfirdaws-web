import { Grid } from '@mui/material';
import type { NextPage } from 'next';
import BannerWidget from '../../components/BannerWidget';
import NewsWidget from '../../components/NewsWidget';
import { GET_ASSETS_QUERY, GetAssetsQuery } from '../../operations/queries/Assets';
import client from '../../utility/apollo-client';

interface Props {
  bannerImageUrl: string;
  logoImageUrl: string;
}

const Home: NextPage<Props> = ({ bannerImageUrl, logoImageUrl }) => {
  return (
    <Grid container direction={'column'} rowSpacing={2.5}>
      <Grid item>
        <BannerWidget bannerImageUrl={bannerImageUrl} />
      </Grid>
      <Grid item>
        <NewsWidget />
      </Grid>
    </Grid>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<GetAssetsQuery>({
    query: GET_ASSETS_QUERY,
  });

  if (data == null) {
    throw new Error('No data');
  }

  const bannerImageUrl = data.asset?.banner?.url;
  const logoImageUrl = data.asset?.logo?.url;

  if (bannerImageUrl == null || logoImageUrl == null) {
    throw new Error('No image url');
  }

  return {
    props: {
      bannerImageUrl,
      logoImageUrl,
    },
  };
}

export default Home;
