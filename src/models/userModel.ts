import { Document, Schema, model } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
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
    }
});

const User = model<IUser>('User', userSchema);

export { IUser, User };