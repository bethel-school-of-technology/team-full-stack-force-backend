import { Router } from "express";
import { getUserById } from "../controllers/userController";

const router = Router();

router.get('/:id', getUserById);
router.put('/:id', editUser);
router.post('/', addUser);
router.post('/login', loginUser);

export default router;