import TaskService from "@/services/task.service";
import { Request, Response } from "express";
const taskService = new TaskService();

class TaskController {
    async getTasks (req: Request, res: Response) {
        try {
            const task = await taskService.getTasks();
            return res.status(201).json(task);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default TaskController;
