import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  // default username / password on init
  env: {
    umami_user: 'phmadmin',
    umami_password: 'PhippsHenson2689!!',
  },
});
