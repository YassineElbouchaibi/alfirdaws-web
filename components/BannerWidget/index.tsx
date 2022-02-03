import { Grid, Typography, Stack, Button } from '@mui/material';

const BannerWidget = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent={'flex-start'}
      alignItems={'center'}
      sx={{
        height: '75vh',
        backgroundImage: `url(${'/banner.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 37%',
        width: '100vw',
      }}
    >
      <Grid
        item
        sx={{
          flexGrow: 5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          textAlign={'center'}
          sx={{
            fontSize: { xs: 'h2.fontSize', md: 'h1.fontSize' },
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          Masjid Al Firdaws
        </Typography>
      </Grid>

      <Grid
        item
        sx={{
          flexGrow: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack spacing={2} direction="row">
          <Button variant="contained" disableElevation size="large">
            Donate
          </Button>
          <Button variant="contained" disableElevation size="large">
            Salah Time
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default BannerWidget;
