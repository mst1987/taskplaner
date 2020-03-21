export interface Task {
    _id?: number;
    name: string;
    duration: number;
    description?: string;
    editedBy?: string;
    status?: string;
}
