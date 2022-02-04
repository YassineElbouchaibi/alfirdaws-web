import getConfig from 'next/config';

const {
  publicRuntimeConfig: { cmsUri },
} = getConfig();

const getAbsoluteCmsUrl = (path: string) => {
  return `${cmsUri}${path}`;
};

export default getAbsoluteCmsUrl;
