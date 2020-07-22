export default client => msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) {
    return;
  }

  try {
    client.commands.get(command).render(msg, args);
  } catch (error) {
    msg.reply(t("oops"));
  }
};
