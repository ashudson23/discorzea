import NodeCache from 'node-cache';

const stdTTL = 60 * 60 * 1; // 1 Hour in seconds
const cache = new NodeCache({
  stdTTL,
  checkperiod: stdTTL * 0.2,
  useClones: false,
});

const get = (key, fn) => {
  const value = cache.get(key);

  if (value) {
    return Promise.resolve(value);
  }

  return fn().then(result => {
    cache.set(key, result);
    return result;
  });
}

export default {
  get,
};
