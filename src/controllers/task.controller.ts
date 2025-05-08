import { NextFunction, Request, Response } from "express";
import TaskService from "@/services/task.service";
const taskService = new TaskService();

class TaskController {
    async getAllTasksInActivity (req: Request, res: Response, next: NextFunction) {
        try {
            const task = await taskService.getTasks();
            res.status(200).json(task);
        } catch (error) {
            next(error);
        }
    }

    async createTask (req: Request, res: Response, next: NextFunction) {
        try {
            const task = await taskService.createTask(req.body);
            res.status(201).json(task);
        } catch (error) {
            next(error);
        }
    }
}

export default TaskController;
