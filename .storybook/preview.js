import '../styles/globals.css';

import React from 'react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { setConfig } from 'next/config';

import lightTheme from '../styles/theme/lightTheme';
import createEmotionCache from '../utility/createEmotionCache';
import { publicRuntimeConfig } from '../next.config';

const clientSideEmotionCache = createEmotionCache();

setConfig({ publicRuntimeConfig });

export const decorators = [
  (Story) => (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </CacheProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
