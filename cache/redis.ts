import { createClient, RedisClientType } from "redis";

export class Redis {
    protected redis: RedisClientType;

    constructor() {
        this.redis = createClient({
            username: process.env.CACHE_USERNAME,
            password: process.env.CACHE_PASSWORD,
            socket: {
                host: process.env.CACHE_HOST,
                port: 13598,
            }
        });    
    }

    async connect(): Promise<void> {
        await this.redis.connect();
    }

    getRedis(): RedisClientType {
        return this.redis;
    }
}

const redis: Redis = new Redis();
redis.connect();
const cache: RedisClientType = redis.getRedis();

export { cache };


