export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://friendly-dev-backend-pmaj.onrender.com'),
  proxy: true, // ✅ Tell Strapi to trust Render’s proxy

  app: {
    keys: env.array('APP_KEYS', [
      'key1',
      'key2',
      'key3',
      'key4',
    ]),
  },

  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    // ✅ Force cookies to be insecure (HTTP) even on production
    cookies: {
      secure: false,
      sameSite: 'none',
    },
  },
});
