import Image from 'next/image';
import { Grid, Stack, Typography, useTheme } from '@mui/material';
import getAbsoluteCmsUrl from '../../utility/getAbsoluteCmsUrl';

interface Props {
  title: string;
  description: string;
  imageUrl?: string;
  publishedAt: string;
}

const NewsItem = ({ title, description, imageUrl, publishedAt }: Props) => {
  const theme = useTheme();
  const dateString = new Date(publishedAt).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Grid
      container
      my={1}
      spacing={1.25}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '20vh',
        width: '70%',
      }}
    >
      {/* Icon */}
      {imageUrl && (
        <Grid item xs={1.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src={getAbsoluteCmsUrl(imageUrl)}
            alt="News"
            width={theme.spacing(200).replace('px', '')}
            height={theme.spacing(200).replace('px', '')}
            objectFit={'cover'}
          />
        </Grid>
      )}

      <Grid item xs>
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2} padding={2}>
          {/* Title */}
          <Typography sx={{ fontSize: 'h5.fontSize' }}>{title}</Typography>

          {/* Description */}
          <Typography sx={{ whiteSpace: 'pre-wrap' }}>{description}</Typography>

          {/* Publication date */}
          <Typography pt={1} sx={{ fontSize: 'body2.fontSize', alignSelf: 'flex-end' }}>
            {dateString}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default NewsItem;
