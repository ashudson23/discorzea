import Discord from 'discord.js';
import * as events from './events';

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

const PREFIX = "/";
const getAliases = (value = "") => value.split(" ").filter(x => x);

client.setup = (token) => {
  client.login(token);

  Object.keys(events).forEach(event => {
    client.on(event, events[event](client))
  });

  require('./commands/index.js').default
    .forEach(([key, cmd]) => {
      const info = t(`command.${key}`);
      const { name, aliases } = info;

      [name, ...getAliases(aliases)].forEach(keyword => {
        client.commands.set(`${PREFIX}${keyword}`, { ...info, ...cmd })
      });
    }
  );
};

export default client;
