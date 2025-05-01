import { PrismaClient } from "@/generated/client";

const prisma = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
    ],
});

if (process.env.NODE_ENV === "development"){
    prisma.$on('query', (e: {
        query: string;
        params: string;
        duration: number;
    }) => {
        console.log('Query: ' + e.query);
        console.log('Params: ' + e.params);
        console.log('Duration: ' + e.duration + 'ms');
    });
}

export default prisma;