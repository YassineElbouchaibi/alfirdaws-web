import Image from 'next/image';
import { Grid, Typography, Stack, Button, Divider } from '@mui/material';

// News Widget that lists the latest news from lorem ipsum
const NewsWidget = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent={'flex-start'}
      alignItems={'center'}
      spacing={0}
      sx={{
        width: '100%',
      }}
    >
      <Grid
        item
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '15vh',
        }}
      >
        <Typography
          textAlign={'center'}
          sx={{
            fontSize: { xs: 'h3.fontSize', md: 'h2.fontSize' },
            color: 'primary.main',
          }}
        >
          Latest News
        </Typography>
      </Grid>

      <Divider variant="middle" sx={{ color: 'primary.main', width: '75%' }} />

      {/* Create 5 news entry and render them */}
      {[...Array(5)].map((_, index) => (
        <>
          <Grid
            key={`news-entry-${index}`}
            item
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '20vh',
              width: '70%',
            }}
          >
            {/* Icon */}
            <Image src={`https://source.unsplash.com/random?${index}`} alt="News" width={200} height={200} />

            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2} padding={2}>
              {/* Title */}
              <Typography sx={{ fontSize: 'h5.fontSize' }}>Title</Typography>

              {/* Description */}
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </Typography>
            </Stack>
          </Grid>
          <Divider sx={{ color: 'primary.main', width: '70%' }} key={`news-entry-${index}-divider`} />
        </>
      ))}
    </Grid>
  );
};

export default NewsWidget;
