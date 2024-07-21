import { Router } from "express";

const router = Router();

router.get('/:id', getUserById);
router.put('/:id', editUser);
router.post('/', addUser);
router.post('/login', loginUser);

export default router;