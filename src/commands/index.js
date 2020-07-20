const on = (command, render) => ({
  name: t(`${command}.name`),
  description: t(`${command}.description`),
  render,
});

const boop = on('/beep', (msg, args) => {
  msg.reply('boop');
});

const beep = on('/boop', (msg, args) => {
  msg.reply('beep');
});

export default [
  beep,
  boop,
];
