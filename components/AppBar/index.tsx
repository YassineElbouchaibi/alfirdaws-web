import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { capitalize } from '../../utils/capitalize';

const pages = ['home', 'about us'];

interface Props {}

const ResponsiveAppBar = ({}: Props) => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<HTMLButtonElement | null>(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Large mode Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: 'primary.main',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Masjid Al Firdaws
          </Typography>

          {/* Large Mode Buttons */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  color: 'primary.main',
                  display: 'block',
                }}
                onClick={() => {
                  router.push(`/${page.replace(/\s/g, '-')}`);
                  setAnchorElNav(null);
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Small mode Logo */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: 'primary.main',
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            Masjid Al Firdaws
          </Typography>

          {/* Small Mode Dropdown buttons */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => setAnchorElNav(event.currentTarget)}
              sx={{
                color: 'primary.main',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => setAnchorElNav(null)}>
                  <Typography textAlign="center" sx={{ color: 'primary.main' }}>
                    {capitalize(page)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
