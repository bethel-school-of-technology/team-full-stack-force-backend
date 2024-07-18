import { Document, Schema, model } from 'mongoose';

interface ITask extends Document {
    user: string;
    priority: number;
    task: string;
    assigned: number;
    dueDate: Date;
};

const taskSchema: Schema = new Schema({
    user: {
        type: String,
        required: true,
        unique: false
    },
    priority: {
        type: Number,
        required: true,
        unique: false
    },
    task: {
        type: String,
        required: true,
        unique: false
    },
    assigned: {
        type: Number,
        required: true,
        unique: false
    },
    dueDate: {
        type: Date,
        required: true,
        unique: false
    }
});

const Task = model<ITask>('Task', taskSchema);

export { ITask, Task }