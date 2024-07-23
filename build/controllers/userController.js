"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const userModel_1 = require("../models/userModel");
const getUserById = async (req, res, next) => {
    let userId = req.params.id;
    let userItem = await userModel_1.User.findByPk(userId);
    if (userItem) {
        res.status(200).json({ user: userItem });
    }
    else {
        res.status(404).json({ error: 'not found' });
    }
    ;
};
exports.getUserById = getUserById;
