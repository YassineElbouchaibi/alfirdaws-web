import { Box, Divider, Grid, Paper, Skeleton, Stack, Typography, useTheme } from '@mui/material';
import type { NextPage } from 'next';

import { GET_ABOUT_US_PAGE_DATA_QUERY, GetAboutUsPageDataQuery } from '../../operations/queries/AboutUsPageData';
import client from '../../utility/apollo-client';
import getAbsoluteCmsUrl from '../../utility/getAbsoluteCmsUrl';

interface Props {
  bannerImageUrl: string;
  logoImageUrl: string;
}

const AboutUs: NextPage<Props> = ({ bannerImageUrl, logoImageUrl }) => {
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
                    color: 'secondary.contrastText',
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
                    color: 'secondary.contrastText',
                  }}
                >
                  Le centre culturel musulman de Terrebonne (Mosquée Al Firdaws) est une association à but non lucratif
                  qui vise à rassembler et servir la communauté musulmane de la Ville de Terrebone et de la MRC des
                  Moulins en assurant les services de prières et en proposant de nombreuses activités religieuses,
                  éducatives et ludiques, dans un cadre fraternel et chaleureux.
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
