export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://friendly-dev-backend-pmaj.onrender.com'),

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
    cookies: {
      secure: false, // ✅ allow cookies on non-https (Render proxy handles SSL)
      sameSite: false,
    },
  },

  settings: {
    // ✅ This line is critical — trust Render’s proxy
    proxy: true,
  },
});
