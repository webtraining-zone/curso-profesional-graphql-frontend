const withSass = require('@zeit/next-sass');
const nextRuntimeDotenv = require('next-runtime-dotenv');

const withConfig = nextRuntimeDotenv({
  path: '.env',
  public: [
    'SERVER_API_URL',
  ],
  server: [
    'SECRET',
  ],
});

module.exports = withConfig(withSass());

