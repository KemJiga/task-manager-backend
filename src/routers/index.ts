import express from 'express';
import userRouter from './user.router';
import taskRouter from './task.router';

const router = express.Router();

router.use('/users', userRouter);
router.use('/tasks', taskRouter);

export default router;
