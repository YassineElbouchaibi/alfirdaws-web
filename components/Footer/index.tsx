import { Grid, Typography } from '@mui/material';

// TODO: Add links to social media if available on the CMS
// TODO: Add a link to the contact us page
// TODO: Add a link to the privacy policy page
// TODO: Add a link to the terms of service page
// TODO: Make text editable on the CMS

const Footer = () => {
  return (
    <footer>
      <Grid container direction={'row'} py={2} px={4} sx={{ backgroundColor: 'secondary.main' }}>
        {/* TODO: Add Contact Us Form */}
        {/* TODO: Add Contact Info */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center" color="primary.dark">
            {/* TODO: Localize */}
            {`Copyright ${new Date().getFullYear()} - Masjid Al-Firdaws. All rights reserved.`}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
