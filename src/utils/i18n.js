import { join } from 'path';
import i18next from 'i18next';
import Backend from "i18next-fs-backend";

const defaultLanguage = 'en';

const init = () => new Promise(resolve => {
  i18next
    .use(Backend)
    .init({
      fallbackLng: defaultLanguage,
      defaultNS: 'default',
      ns: ['default'],
      backend: {
        loadPath: join(__dirname, '../../locales/{{lng}}/{{ns}}.json'),
      },
      returnObjects: true,
    }).then(t => resolve(t));
})

export default async (locale = defaultLanguage) => {
  const translation = await init();
  await i18next.changeLanguage(locale);
  return translation;
}
