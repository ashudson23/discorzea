const beep = {
  name: '/beep',
  description: 'beep!',
  render(msg, args) {
    msg.reply('boop');
  },
};

const boop = {
  name: '/boop',
  description: 'boop!',
  render(msg, args) {
    msg.reply('beep');
  },
};

export default [
  beep,
  boop,
];
