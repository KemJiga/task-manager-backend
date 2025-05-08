import ActivityRepository from '@/repositories/activity.repository';
import ActivityInterface from "@/interfaces/activity.interface";

class ActivityService {
    // async getActivities(){
    //     return await ActivityRepository.getActivities();
    // }

    async createActivity(activity: ActivityInterface){
        return await ActivityRepository.createActivity(activity);
    }
}

export default ActivityService;