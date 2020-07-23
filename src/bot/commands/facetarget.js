import XivApi from 'xivapi-js';

import imageAttachment from '../../utils/imageAttachment'
import cache from '../../utils/cache';
import hash from '../../utils/hash';

const xivApi = new XivApi({
  private_key: process.env.XIVAPI_KEY,
  language: locale,
});

export default {
  async render (msg, args) {
    const { match } = this;
    const phrase = args.filter(x => x).join(' ').trim();

    if (!phrase || !match) {
      msg.reply(`💀 ${t("oops")}`);
      return;
    }

    const {
      firstname,
      surname,
      server,
    } = phrase.match(RegExp(match))?.groups ?? {};

    const key = `${this.name}.${hash(phrase)}`;
    const name = [firstname, surname].filter(x => x).join(' ');

    const data = await cache.get(key, async () => {
      return await xivApi.character.search(name, { server });
    });

    const [{ Avatar: avatar }] = data.Results;
    const attachment = await imageAttachment(avatar, 96, 96, `${name}.png`);

    msg.reply('❤', attachment);
  }
};
