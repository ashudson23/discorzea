export default async () => {
  const config = process.env.CONFIG || '';

  if (config) {
    return JSON.parse(config);
  }

  // PSEUDO: get config from db
  const c = {
    token: process.env.TOKEN,
    totalShards: +process.env.SHARD_COUNT,
    locale: "fr",
  };
  process.env.CONFIG = JSON.stringify(c);
  return c;
}
