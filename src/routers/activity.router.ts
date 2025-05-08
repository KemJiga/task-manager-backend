import { Router } from 'express';
import ActivityController from '@/controllers/activity.controller';
import taskRouter from './task.router'

const router = Router();
const activityController = new ActivityController();

router.post('/test', (req, res) => {
    res.json({ message: 'Activity router is working' });
})

// Activity routes
router.post('/', activityController.createActivity);
// router.get('/', activityController.getAllActivities);
// router.get('/:activityId', activityController.getActivityById);
// router.put('/:activityId', activityController.updateActivity);
// router.delete('/:activityId', activityController.deleteActivity);

// Mount task router last
router.use('/tasks', taskRouter);

export default router;
