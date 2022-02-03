import { Grid } from '@mui/material';
import type { NextPage } from 'next';
import BannerWidget from '../../components/BannerWidget';
import NewsWidget from '../../components/NewsWidget';

const Home: NextPage = () => {
  return (
    <Grid container direction={'column'} rowSpacing={2.5}>
      <Grid item>
        <BannerWidget />
      </Grid>
      <Grid item>
        <NewsWidget />
      </Grid>
    </Grid>
  );
};

export default Home;
