import express from 'express';
import userRouter from '@/routers/user.router';
import activityRouter from '@/routers/activity.router'

const router = express.Router();

router.use('/users', userRouter);
router.use('/activities', activityRouter);

export default router;
