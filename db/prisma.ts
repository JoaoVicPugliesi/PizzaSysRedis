import { PrismaClient } from "../src/generated/prisma";

const db: PrismaClient = new PrismaClient({
    log: ['query', 'info']
})

export { db };