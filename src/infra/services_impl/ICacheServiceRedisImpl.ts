import { cache } from '../../../cache/redis';
import { ICacheService } from '../../domain/services/ICacheService';

export class ICacheServiceRedisImpl implements ICacheService {
    async set(key: string, value: string): Promise<void> {
        await cache.set(key, value)
    }
    async get(key: string): Promise<string | undefined> {
        const element: string | null = await cache.get(key);
        
        if(!element) return undefined;

        return element;
    }
}