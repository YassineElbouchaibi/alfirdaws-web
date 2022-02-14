import getConfig from 'next/config';

const {
  publicRuntimeConfig: { cmsUri },
} = getConfig();

const getAbsoluteCmsUrl = (path: string) => {
  if (path.startsWith('/')) {
    return `${cmsUri}${path}`;
  }

  return path;
};

export default getAbsoluteCmsUrl;
