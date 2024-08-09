import { Router } from "express";
import { addUser, editUser, getAllUsers, getUserById, loginUser } from "../controllers/userController";

const router = Router();

router.get('/users', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.post('/register', addUser);
router.post('/login', loginUser);

export default router;