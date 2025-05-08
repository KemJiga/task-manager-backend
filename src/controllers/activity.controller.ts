import { NextFunction, Request, Response } from "express";
import ActivityService from '@/services/activity.service';
const activityService = new ActivityService();

class ActivityController {
    async createActivity (req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        try {
            const activity = await activityService.createActivity(req.body);
            res.status(201).json(activity);
        } catch (error) {
            next(error);
        }
    }
}

export default ActivityController;
