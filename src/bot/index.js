import client from './discord';

import i18n from '../utils/i18n';
import getConfig from '../config';

(async () => {
  const config = await getConfig();
  global.t = await i18n(config.locale);

  client.setup(config.token);
})();