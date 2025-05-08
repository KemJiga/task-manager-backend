import { Request, Response, NextFunction } from "express";
import TaskInterface from "@/interfaces/task.interface";

const validateTask = (req: Request, res: Response, next: NextFunction) => {
    try {
        const task: TaskInterface = req.body;
        if (!task.title || !task.description || !task.dueDate || !task.startDate || !task.estimatedTime || !task.extendDates || !task.complexity || !task.status || !task.deliverables || !task.activityId) {
            throw new Error('All fields are required');
        }
        next();
    } catch (error) {
        next(error);
    }
}

export default validateTask;