import { Client as ThenRedisClient } from 'then-redis';

class RedisClient extends ThenRedisClient {
  constructor(server, database = null) {
    super(server);

    if (database) {
      this.select(database);
    }
  }

  unref() {
    return this._redisClient.unref();
  }

  enqueue(queue, items) {
    return items.length > 0 ? this.rpush(queue, items) : Promise.resolve(-1);
  }

  dequeue(queue) {
    return this.blpop(queue, 0).get(1); // results is [queueName, value]
  }

  deleteKeys(keys) {
    return keys.length > 0 ? this.del(keys) : Promise.resolve(-1);
  }

  existKey(key) {
    return this.exists(key).then(count => count === 1);
  }

  isMemberOf(key, item) {
    return this.sismember(key, item).then(res => res == 1);
  }

  listQueue(queue) {
    return this.lrange(queue, 0, -1);
  }

  scanKeys(pattern = '*', cursor = 0, res = []) {
    return this.scan(cursor, 'MATCH', pattern)
    .then(ret => {
      const _res = res.concat(ret[1]);
      return ret[0] !== '0' ? this.scanKeys(pattern, ret[0], _res) : Promise.resolve(_res);
    });
  }

  countKeys(pattern = '*', cursor = 0, count = 0) {
    return this.scan(cursor, 'MATCH', pattern)
    .then(ret => {
      const _count = count + ret[1].length;
      return ret[0] !== '0' ? this.countKeys(pattern, ret[0], _count) : Promise.resolve(_count);
    });
  }
}

export default RedisClient;
