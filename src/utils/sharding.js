import { ShardingManager } from 'discord.js';

export default async (file, options) => {
  const manager = new ShardingManager(file, options);
  manager.on("shardCreate", shard => {
    console.log(t("sharded", shard));
  });
  manager.spawn();
};
