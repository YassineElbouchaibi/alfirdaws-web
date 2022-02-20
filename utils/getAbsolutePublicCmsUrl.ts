import getConfig from 'next/config';

const {
  publicRuntimeConfig: { publicCmsUri },
} = getConfig();

const getAbsolutePublicCmsUrl = (path: string) => {
  if (path.startsWith('/')) {
    return `${publicCmsUri}${path}`;
  }

  return path;
};

export default getAbsolutePublicCmsUrl;
