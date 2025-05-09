import { PrismaClient } from '../generated/client';

const prisma = new PrismaClient();

const taskStatuses = ['PENDING', 'IN_PROGRESS', 'COMPLETED'] as const;
const commentTypes = ['FINISHED', 'CLOSED', 'EXTENDED'] as const;

async function main() {
    // Reset databse
    console.log('Resetting database...');
    await prisma.$executeRaw`TRUNCATE TABLE "Comment" RESTART IDENTITY CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE "Task" RESTART IDENTITY CASCADE;`;
    await prisma.$executeRaw`TRUNCATE TABLE "Activity" RESTART IDENTITY CASCADE;`;
    console.log('Database reset completed');
    // Create 10 activities
    const activities = await Promise.all(
        Array.from({ length: 10 }, (_, i) => {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - i);
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 7));

        return prisma.activity.create({
            data: {
            userId: `user${i + 1}`,
            startDate,
            endDate,
            complexity: Math.floor(Math.random() * 5) + 1,
            },
        });
        })
    );

    // Create 10 tasks for each activity
    for (const activity of activities) {
        await Promise.all(
        Array.from({ length: 10 }, (_, i) => {
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - i);
            const dueDate = new Date(startDate);
            dueDate.setDate(dueDate.getDate() + Math.floor(Math.random() * 14));

            return prisma.task.create({
            data: {
                activityId: activity.id,
                title: `Task ${activity.id}-${i + 1}`,
                description: `Description for task ${activity.id}-${i + 1}`,
                startDate,
                dueDate,
                estimatedTime: Math.random() * 8 + 1,
                extendDates: [],
                complexity: Math.floor(Math.random() * 5) + 1,
                status: taskStatuses[Math.floor(Math.random() * taskStatuses.length)],
                deliverables: [],
            },
            });
        })
        );
    }

    // Create 10 comments for each task
    const tasks = await prisma.task.findMany();
    for (const task of tasks) {
        await Promise.all(
        Array.from({ length: 10 }, (_, i) => {
            return prisma.comment.create({
            data: {
                taskId: task.id,
                text: `Comment ${task.id}-${i + 1}`,
                type: commentTypes[Math.floor(Math.random() * commentTypes.length)],
            },
            });
        })
        );
    }

    console.log('Database seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });