import Discord from 'discord.js';
import * as events from './events';

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.setup = (token) => {
  client.login(token);

  Object.keys(events).forEach(event => {
    client.on(event, events[event](client))
  });

  require('./commands/index.js').default
    .forEach(([keyword, command]) => {
      const name = t(`/${keyword}.name`);
      const description = t(`/${keyword}.description`);

      client.commands.set(name, { ...command, description });
    }
  );
};

export default client;
