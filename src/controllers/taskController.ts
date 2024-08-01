import { RequestHandler } from "express";
import { Task } from "../models/taskModel";
import { verifyUser } from "../services/authentication";
import { User } from "../models/userModel";

export const getAllTasks: RequestHandler = async (req, res, next) => {
    let taskList: Task[] = await Task.findAll();
    res.status(200).json({ taskList });
}

export const getTaskById: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;

    try {
        let taskItem: Task | null = await Task.findByPk(itemId);

        res.status(200).json({ task: taskItem });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'Server Error' })
    }
};

export const getTaskByUser: RequestHandler = async (req, res, next) => {
    const userId = parseInt(req.params.userId, 10);

    if (isNaN(userId)) {
        return res.status(400).json({ status: 'Missing UserId' });
    }

    try {
        const tasks = await Task.findAll({ where: { userId } });

        res.status(200).json({ tasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'Server Error' })
    }
};

export const addTask: RequestHandler = async (req, res, next) => {
    let verifiedUser: User | null = await verifyUser(req);

    if (!verifiedUser) {
        return res.status(401).json({ status: 'Authentication Error' });
    };

    try {
        const { priority, task, dueDate } = req.body;

        if (priority === undefined || task === undefined || dueDate === undefined) {
            return res.status(400).json({ status: 'Missing Details' });
        }

        const newTask = await Task.create({
            userId: verifiedUser.userId,
            priority,
            task,
            dueDate,
        });
        

        res.status(201).json({ task: newTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'Server Error' });
    }
};

export const editTask: RequestHandler = async (req, res, next) => {
    let verifiedUser: User | null = await verifyUser(req);

    if (!verifiedUser) {
        return res.status(401).json({ status: 'ERROR', code: 'AUTH' });
    };

    let itemId = req.params.id;
    let updatedItem: Task = req.body;

    let [updated] = await Task.update(updatedItem, { where: { taskId: itemId } });

    if (updated === 1) {
        res.status(200).json({ status: 'Task Updated' });
    } else {
        res.status(400).json({ status: 'Failed to Update' });
        console.error(updatedItem);
    };
};

export const deleteTask: RequestHandler = async (req, res, next) => {
    let verifiedUser: User | null = await verifyUser(req);

    if (!verifiedUser) {
        return res.status(403).json({ status: 'ERROR', code: 'AUTH' });
    };

    let itemId = req.params.id;
    
    let deleted = await Task.destroy({ where: { taskId: itemId }});

    if (deleted) {
        res.status(200).json({ status: 'OK' });
    } else {
        res.status(400).json({ status: 'ERROR' });
    };
};