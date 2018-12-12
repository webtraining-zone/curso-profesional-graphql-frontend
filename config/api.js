// Based on example available in https://github.com/tusbar/next-runtime-dotenv/blob/master/example/pages/index.js
import getConfig from 'next/config';

const {
  publicRuntimeConfig: {SERVER_API_URL},
  serverRuntimeConfig: {NODE_ENV, SECRET},
} = getConfig();

const CONFIG = {
  serverURL: SERVER_API_URL,
};

export default CONFIG;
