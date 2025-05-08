import { Router } from 'express';

import TaskController from '@/controllers/task.controller';
import validateTask from '@/middlewares/task.validator';

const taskController = new TaskController();
const router = Router();

// Task Management Routes
// router.get('/:activityId/tasks', taskController.getAllTasksInActivity);
router.post('/', validateTask, taskController.createTask);
// router.put('/:activityId/tasks:id', validateTask, taskController.updateTask);
// router.delete('/:activityId/tasks:id', taskController.deleteTask);

// Task Filtering Routes
// router.get('/status/:status', taskController.getTasksByStatus);
// router.get('/due-date/:date', taskController.getTasksByDueDate);

export default router;