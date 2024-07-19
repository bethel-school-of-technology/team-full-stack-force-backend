import { Document, Schema, model, Types } from 'mongoose';
import { IUser } from './userModel';

interface ITask extends Document {
    user: string;
    priority: number;
    task: string;
    assigned: Types.ObjectId| IUser;
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
        type: Schema.Types.ObjectId,
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