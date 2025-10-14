export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // Use HTTPS URL for Render deployment
  url: env('PUBLIC_URL', 'https://friendly-dev-backend-pmaj.onrender.com'),

  app: {
    keys: env.array('APP_KEYS', [
      'yourKey1',
      'yourKey2',
      'yourKey3',
      'yourKey4',
    ]),
  },

  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    cookies: {
      secure: env.bool('COOKIE_SECURE', false), // 👈 disable secure cookie for HTTP
      sameSite: false, // prevent cross-site cookie issues
    },
  },
});
