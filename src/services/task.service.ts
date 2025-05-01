import dotenv from 'dotenv';
import TaskRepository from '@/repositories/task.repository';

dotenv.config();

class TaskService {
    async getTasks(){
        return await TaskRepository.getTasks();
    }
}

export default TaskService;
