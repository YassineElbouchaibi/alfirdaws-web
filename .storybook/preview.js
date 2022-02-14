import '../styles/globals.css';

import React from 'react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import lightTheme from '../styles/theme/lightTheme';
import createEmotionCache from '../utility/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

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
