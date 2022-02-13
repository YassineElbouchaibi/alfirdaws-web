import { Box, Divider, Grid, Paper, Skeleton, Stack, Typography, useTheme } from '@mui/material';
import type { NextPage } from 'next';

import { GET_ABOUT_US_PAGE_DATA_QUERY, GetAboutUsPageDataQuery } from '../../operations/queries/AboutUsPageData';
import client from '../../utility/apollo-client';
import getAbsoluteCmsUrl from '../../utility/getAbsoluteCmsUrl';

interface Props {
  bannerImageUrl: string;
  logoImageUrl: string;
}

const AboutUs: NextPage<Props> = ({ bannerImageUrl }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          paddingY: 4,
          backgroundImage: `url(${getAbsoluteCmsUrl(bannerImageUrl)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          width: '100%',
        }}
      >
        <Grid
          container
          direction={'column'}
          rowSpacing={2.5}
          alignItems={'center'}
          justifyContent={'flex-start'}
          mt={0}
        >
          <Grid item sx={{ width: '75%', display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={0} sx={{ width: '100%', display: 'flex', justifyContent: 'center', minHeight: '85vh' }}>
              <Stack spacing={4} direction="column" sx={{ width: '75%', alignItems: 'center' }}>
                <Typography
                  sx={{
                    paddingTop: 4,
                    fontSize: 'h2.fontSize',
                    color: 'primary.dark',
                    alignSelf: 'center',
                  }}
                >
                  About Us
                </Typography>

                <Divider sx={{ width: '100%' }} />

                <Typography
                  sx={{
                    width: '95%',
                    alignSelf: 'center',
                    fontSize: { xs: 'subtitle1.fontSize', md: 'h6.fontSize' },
                    lineHeight: '2.2em',
                    color: 'primary.dark',
                  }}
                >
                  The Muslim Cultural Center of Terrebonne (Al Firdaws Mosque) is a non-profit association which aims to
                  bring together and serve the Muslim community of the City of Terrebonne and the MRC des Moulins by
                  providing prayer services and offering many religious activities, educational and recreational
                  activities, in a warm and fraternal environment.
                </Typography>

                <Box sx={{ width: '95%', paddingBottom: 10 }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Skeleton variant="rectangular" height={300} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Skeleton variant="rectangular" height={300} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Skeleton variant="rectangular" height={300} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Skeleton variant="rectangular" height={300} />
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export async function getStaticProps() {
  const { data } = await client.query<GetAboutUsPageDataQuery>({
    query: GET_ABOUT_US_PAGE_DATA_QUERY,
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

export default AboutUs;
