import Task from "@/interfaces/task.interface";

export default interface Activity {
    userId: string;
    startDate: Date;
    endDate: Date;
    complexity: number;
    tasks?: Task[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}