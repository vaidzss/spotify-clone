import { Router } from "express";
import { requireAdmin, protectRoute } from "../middleware/auth.middleware.js";
import { getStats } from "../controller/stats.controller.js";
const router = Router();

router.get("/",protectRoute, requireAdmin, getStats)

export default router 