import '../styles/globals.css';

import React from 'react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { setConfig } from 'next/config';
import * as NextImage from 'next/image';

import lightTheme from '../styles/theme/lightTheme';
import createEmotionCache from '../utils/createEmotionCache';
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

const OriginalNextImage = NextImage.default;

// eslint-disable-next-line no-import-assign
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (/** @type {import('next/image').ImageProps} */ props) => {
    if (typeof props.src === 'string') {
      return <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />;
    } else {
      // don't need blurDataURL here since it is already defined on the StaticImport type
      return <OriginalNextImage {...props} unoptimized />;
    }
  },
});
