export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://friendly-dev-backend-pmaj.onrender.com'),
  proxy: true, // ✅ para alam ni Strapi na may HTTPS proxy (Render)
  app: {
    keys: env.array('APP_KEYS'),
  },
  settings: {
    // ✅ disable secure cookie check kapag nasa proxy
    session: {
      secure: false,
    },
  },
});
