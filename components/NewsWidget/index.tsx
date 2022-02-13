import { Divider, Grid, Typography } from '@mui/material';

import { GetHomePageDataQuery } from '../../operations/queries/HomePageData';
import NewsItem from '../NewsItem';

interface Props {
  announcements: NonNullable<GetHomePageDataQuery['announcements']>;
}

// News Widget that lists the latest news from lorem ipsum
const NewsWidget = ({ announcements }: Props) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent={'flex-start'}
      alignItems={'center'}
      spacing={0}
      pb={10}
      sx={{
        width: '100%',
      }}
    >
      {/* Widget Title */}
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

      {/* Widget Divider */}
      <Grid item sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Divider variant="middle" sx={{ color: 'primary.main', width: '75%' }} />
      </Grid>

      {/* Announcements */}
      {announcements.map(({ title, description, icon, publishedAt }, idx) => (
        <Grid
          item
          key={`${title}-${idx}`}
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <NewsItem title={title} description={description} imageUrl={icon?.url} publishedAt={publishedAt} />
          {idx != announcements.length - 1 && <Divider sx={{ color: 'primary.main', width: '70%' }} />}
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsWidget;
