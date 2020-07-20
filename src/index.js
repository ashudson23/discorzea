import './setup';
import bot from './discord'

(async () => {
  // TODO: prep storage medium

  bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
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
      msg.reply('Something went wrong!');
    }
  });

  bot.login(process.env.TOKEN);
})();
