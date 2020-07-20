import http from 'http';
import { config as setupEnv } from 'dotenv-flow';
import Discord from 'discord.js';

setupEnv();

const bot = new Discord.Client();
bot.login(process.env.TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
    msg.channel.send('pong');
  }
});

const date = new Date();
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(`Running since ${date}`);
  res.end();
}).listen(8080);
