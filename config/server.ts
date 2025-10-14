export default ({ env }: { env: any }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://friendly-dev-backend-pmaj.onrender.com'),
  proxy: true, // important for HTTPS behind proxy (Render)
  admin: {
    url: '/admin',
    watchIgnoreFiles: ['**/config/middlewares.ts'],
  },
  app: {
    keys: env.array('APP_KEYS'),
  },
});
