// -------- Strapi configuration --------
const cmsUri = process.env.CMS_URI ?? 'http://localhost:1338';
const publicCmsUri = process.env.PUBLIC_CMS_URI ?? 'http://localhost:1338';
// --------------------------------------

// -------- Moonode configuration --------
// Found Endpoints:
//   - https://fkil67m6y9.execute-api.ca-central-1.amazonaws.com/mosque/5142341340
//   - https://vinp0qaxlb.execute-api.ca-central-1.amazonaws.com/get/odata/entity/AlFirdwas_MjI1OCFAIyQly4Ym
const moonodeApiUri = process.env.MOONODE_API_URI ?? 'https://fkil67m6y9.execute-api.ca-central-1.amazonaws.com/mosque';
const moonodeMasjidKey = process.env.MOONODE_MASJID_KEY ?? '5142341340';
// --------------------------------------

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'localhost'],
  },
  publicRuntimeConfig: {
    cmsUri: cmsUri,
    publicCmsUri: publicCmsUri,
    moonodePrayerTimeUri: `${moonodeApiUri}/${moonodeMasjidKey}`,
  },
};

module.exports = nextConfig;
