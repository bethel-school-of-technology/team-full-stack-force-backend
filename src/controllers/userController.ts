import { RequestHandler } from "express";
import { User } from "../models/userModel";
import { comparePasswords, signUserToken } from "../services/authentication";

export const getUserById: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let userItem: User | null = await User.findByPk(itemId);

    if (userItem) {
        res.status(200).json({ user: userItem });
    } else {
        res.status(400).json({ status: 'ERROR' });
    };
};

export const editUser: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let updatedItem: User = req.body;

    let [updated] = await User.update(updatedItem, { where: { userId: itemId } });

    if (updated === 1) {
        res.status(200).json({ status: 'OK' });
    } else {
        res.status(400).json({ status: 'ERROR' });
    };
};

export const addUser: RequestHandler = async (req, res, next) => {
    let newUser: User = req.body;
    let createdUser = await User.create(newUser);

    if (createdUser) {
        res.status(201).json({ status: 'OK' });
    } else {
        res.status(400).json({ status: 'ERROR'});
    };
};

export const loginUser: RequestHandler = async (req, res, next) => {
    let existingUser: User | null = await User.findOne({ 
        where: { email: req.body.email }
    });

    if (existingUser) {
        let passwordsMatch = await comparePasswords(req.body.password, existingUser.password);
        
        if (passwordsMatch) {
            let token = await signUserToken(existingUser);
            res.status(200).json({ status: 'OK', token: token });
        }
        else {
            res.status(401).json({ status: 'ERROR', code: 'PASSWORD'});
        }
    }
    else {
        res.status(401).json({ status: 'ERROR', code: 'USERNAME'});
    }
}