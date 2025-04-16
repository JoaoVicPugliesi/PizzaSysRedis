export interface ICacheService {
    set(key: string, value: string): Promise<void>;
    get(key: string): Promise<string | undefined>;
}