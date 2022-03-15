import { Router } from "express";

import { testFunction } from "../services/myService.js";

const router = Router();

router.get("/", testFunction);

export default router;
