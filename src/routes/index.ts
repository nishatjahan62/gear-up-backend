import { Router } from "express";

import authRoutes from "../modules/auth/auth.routes.js";
import categoryRoutes from "../modules/category/category.routes.js";
import gearRoutes from "../modules/gear/gear.routes.js"

const router = Router();

router.use("/auth", authRoutes);
router.use("/categories",categoryRoutes)
router.use("/gear",gearRoutes)

export default router;