import Discord from 'discord.js';
import commands from './commands';

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

commands.forEach(c => {
  bot.commands.set(c.name, c)
});

export default bot;
