import { config as setupEnv } from 'dotenv-flow';
import { join } from 'path';
import i18n from 'i18next';
import Backend from "i18next-fs-backend";

setupEnv();

i18n
  .use(Backend)
  .init({
    initImmediate: false,
    fallbackLng: 'en',
    defaultNS: 'default',
    ns: ['default'],
    backend: {
      loadPath: join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
    }
  });

global.i18n = i18n;
global.t = i18n.t.bind(i18n);
