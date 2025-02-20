import { Router } from "express";
import { registerUser, loginUser, logout, requestPasswordReset, resetPassword } from "../controllers/auth.controller.js";
import { refreshToken, checkToken } from "../middleware/Jwtutil.js";
const router = Router()

router.post('/register', registerUser)
router.post('login', loginUser)
router.post('/log-out', logout)
router.post('/refresh', refreshToken);
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetPassword);
router.get('/check-token', checkToken);

export default router;