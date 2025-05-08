import ActivityService from '@/services/activity.service';
import { NextFunction, Request, Response } from "express";
const activityService = new ActivityService();

class ActivityController {
    async createActivity (req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        try {
            const activity = await activityService.createActivity(req.body);
            res.status(201).json(activity);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}

export default ActivityController;
