import './setup';
import bot from './discord';
import server from './server'

const getClient = async () => {
  const token = process.env.TOKEN;
  // PSEUDO: get client from db
  return {
    token,
    locale: "fr",
  };
}

(async () => {
  const client = await getClient();
  await i18n.changeLanguage(client.locale);

  bot.on('ready', () => {
    console.info(t("logged", bot.user));
  });

  bot.on('message', msg => {
    const args = msg.content.split(/ +/);
    const command = args.shift().toLowerCase();
  
    if (!bot.commands.has(command)) {
      return;
    }
  
    try {
      bot.commands.get(command).render(msg, args);
    } catch (error) {
      msg.reply(t("oops"));
    }
  });

  bot.login(client.token);
  server();
})();
