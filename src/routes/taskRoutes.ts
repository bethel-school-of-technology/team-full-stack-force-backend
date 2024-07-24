import { Router } from "express";
import { addTask, deleteTask, editTask, getAllTasks, getTaskById } from "../controllers/taskController";

const router = Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
// router.get('/:user', getTaskByUser);
router.post('/', addTask);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);

export default router;