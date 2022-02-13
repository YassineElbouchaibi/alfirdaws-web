import React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import AppBar from '../components/AppBar';
import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import Footer from '../components/Footer';

const clientSideEmotionCache = createEmotionCache();

interface Props extends AppProps {
  emotionCache: any;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: Props) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <AppBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
