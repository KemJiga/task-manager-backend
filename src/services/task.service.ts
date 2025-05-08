import TaskRepository from '@/repositories/task.repository';
import TaskInterface from '@/interfaces/task.interface';

class TaskService {
    async getTasks(){
        return await TaskRepository.getTasks();
    }

    async createTask(task: TaskInterface){
        return await TaskRepository.createTask(task);
    }
}

export default TaskService;
