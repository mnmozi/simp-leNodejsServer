import { Router } from "express";

import validate from "./validate.js";

const router = Router();

router.get("/", validate);

export default router;
