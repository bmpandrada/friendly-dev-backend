export default ({ env }) => {
  const isProduction = env('NODE_ENV') === 'production';

  return {
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
        // disable secure cookie if Render proxy causes HTTPS mismatch
        secure: env.bool('COOKIE_SECURE', false),
        sameSite: false,
      },
    },

    // ✅ important: trust proxy so Strapi knows it’s behind HTTPS
    proxy: true,
  };
};
