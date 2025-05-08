import prisma from "@/config/prismaConnect";
import TaskInterface from '@/interfaces/task.interface';

export default class TaskRepository {
    static async getTasks(){
        return ['task 1', 'task 2', 'task 3'];
    }

    static async createTask(task: TaskInterface){
        return prisma.task.create({
            data: {
                activityId: task.activityId,
                title: task.title,
                description: task.description,
                startDate: task.startDate,
                dueDate: task.dueDate,
                estimatedTime: task.estimatedTime,
                extendDates: task.extendDates,
                complexity: task.complexity,
                status: task.status,
                deliverables: task.deliverables,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        })
    }
}
