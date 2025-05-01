import prisma from "@/config/prismaConnect";

class TaskRepository {
    static async getTasks(){
        return ['task 1', 'task 2'];
    }
}

export default TaskRepository;
