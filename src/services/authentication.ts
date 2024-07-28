const bcrypt = require('bcrypt');
import jwt from "jsonwebtoken";
import { User } from "../models/userModel";
import { Request } from "express";

const secret = "T8geTXVjmqMjqcsJN7BU";

export const hashPassword = async (plainTextPassword: string) => {
    const saltRound = 10;
    const hash = await bcrypt.hash(plainTextPassword, saltRound);
    return hash;
};

export const comparePasswords = async (plainTextPassword: string, hashPassword: string) => {
    return await bcrypt.compare(plainTextPassword, hashPassword);
};

export const signUserToken = async (user: User) => {
    let token = jwt.sign(
        { userId: user.userId },
        secret,
        { expiresIn: '1Hr' }
    );

    return token;
};

export const verifyUser = async (req: Request) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader

        try {
            let decoded: any = await jwt.verify(token, secret);
            return User.findByPk(decoded.userId);
        } catch (err) {
            return null;
        };
    } else {
        return null;
    };
};