export default client => () => {
  console.info(t("logged", client.user));
};
