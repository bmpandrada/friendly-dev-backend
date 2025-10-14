export default ({ env }: { env: any }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://friendly-dev-backend-pmaj.onrender.com'),
  proxy: true, // 🔑 tells Strapi to respect HTTPS headers
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    url: '/admin',
  },
});
