import { Router } from "express";
import { addUser, editUser, getUserById } from "../controllers/userController";

const router = Router();

router.get('/:id', getUserById);
router.put('/:id', editUser);
router.post('/', addUser);
// router.post('/login', loginUser);

export default router;