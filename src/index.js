import './setup';
import { join } from 'path';
import getConfig from './config';
import i18n from './utils/i18n';
import useShards from './utils/sharding';
import server from './server';

const isProduction = process.env.NODE_ENV === 'production';
const bot = join(__dirname, './bot/index.js');

(async () => {
  const config = await getConfig();
  global.locale = config.locale;
  global.t = await i18n(config.locale);
  await server();

  if (!isProduction) {
    return require(bot);
  }

  const { token, totalShards } = config;
  return useShards(bot, { token, totalShards });
})();
