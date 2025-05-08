export default interface Comment {
    id: number;
    taskId: number;
    text: string;
    type: 'FINISHED' | 'CLOSED' | 'EXTENDED';
    createdAt: Date;
    updatedAt: Date;
}