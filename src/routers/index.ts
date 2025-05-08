import express from 'express';
import userRouter from './user.router';
import activityRouter from './activity.router'

const router = express.Router();

router.use('/users', userRouter);
router.use('/activities', activityRouter);

export default router;
