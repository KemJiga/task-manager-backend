import express from 'express';
import { Request, Response } from "express";
import TaskController from '@/controllers/task.controller';

const taskController = new TaskController();
const router = express.Router();

router.get('/', async (req:Request, res:Response) => {
    await taskController.getTasks(req, res);
});

export default router;