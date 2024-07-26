import { RequestHandler } from "express";
import { Task } from "../models/taskModel";

export const getAllTasks: RequestHandler = async (req, res, next) => {
    let taskList: Task[] = await Task.findAll();
    res.status(200).json({ taskList });
}

export const getTaskById: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let taskItem: Task | null = await Task.findByPk(itemId);
    
    if (taskItem) {
        res.status(200).json({ task: taskItem });
    } else {
        res.status(400).json({ status: 'ERROR' });
    };
};

// export const getTaskByUser

export const addTask: RequestHandler = async (req, res, next) => {
    try {
        const { priority, task, dueDate } = req.body;

        if (priority === undefined || task === undefined || dueDate === undefined) {
            return res.status(400).json({ status: 'ERROR', message: 'Missing fields detected' });
        }

        const newTask = await Task.create({
            priority,
            task,
            dueDate,
        });

        res.status(201).json({ status: 'OK', task: newTask });
    } catch (error) {
        console.error(error);
        res.status(400).json({ status: 'ERROR', message: 'Failed to create task', details: error });
    }
};

export const editTask: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let updatedItem: Task = req.body;

    let [updated] = await Task.update(updatedItem, { where: { taskId: itemId } });

    if (updated === 1) {
        res.status(200).json({ status: 'OK' });
    } else {
        res.status(400).json({ status: 'ERROR' });
    };
};

export const deleteTask: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    
    let deleted = await Task.destroy({ where: { taskId: itemId }});

    if (deleted) {
        res.status(200).json({ status: 'OK' });
    } else {
        res.status(400).json({ status: 'ERROR' });
    };
};