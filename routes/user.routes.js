import { Router } from "express";
import { getAllUsers, getUserById, deleteUser, updateUser } from "../controllers/user.controller.js";

const router = Router()

router.get('/getusers', getAllUsers)
router.get('/getuserbyid/:id', getUserById)
router.delete('/deleteuser/:id', deleteUser)
router.put('/updateuser/:id', updateUser)

export default router