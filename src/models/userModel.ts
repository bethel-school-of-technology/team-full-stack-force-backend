import { Document, Schema, model } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userId: number;
};

const userSchema: Schema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: false
    },
    lastName: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    userId: {
        type: Number,
        required: true,
        unique: true
}
});

const User = model<IUser>('User', userSchema);

export { IUser, User };