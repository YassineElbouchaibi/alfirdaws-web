import { Grid, Typography } from '@mui/material';

interface Props {}

const Footer = ({}: Props) => {
  return (
    <footer>
      <Grid container direction={'row'} py={2} px={4} sx={{ backgroundColor: 'secondary.main' }}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center" color="primary.dark">
            {`Copyright ${new Date().getFullYear()} - Masjid Al-Firdaws. All rights reserved.`}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
