export default interface Task {
    activityId: number;
    title: string;
    description: string;
    startDate: Date;
    dueDate: Date;
    estimatedTime: number; // in minutes
    extendDates: Date[];
    complexity: number; // 1-5 scale
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
    deliverables: string[];
    comments?: Comment[];
    createdAt: Date;
    updatedAt: Date;
}