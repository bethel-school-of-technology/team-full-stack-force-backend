import { RequestHandler } from "express";
import { User } from "../models/userModel";

export const getUserById: RequestHandler = async (req, res, next) => {
    let userId = req.params.id;
    let userItem: User | null = await User.findByPk(userId);

    if (userItem) {
        res.status(200).json({ user: userItem });
    } else {
        res.status(404).json({ error: 'not found' });
    };
};

