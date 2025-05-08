import prisma from "@/config/prismaConnect";
import ActivityInterface from '@/interfaces/activity.interface';

export default class ActivityRepository {
    // static async getActivities(){
    //     return ['activity 1', 'activity 2', 'activity 3'];
    // }

    static async createActivity(activity: ActivityInterface){
        return prisma.activity.create({
            data: {
                userId: activity.userId,
                startDate: activity.startDate,
                endDate: activity.endDate,
                complexity: activity.complexity,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        })
    }
}
