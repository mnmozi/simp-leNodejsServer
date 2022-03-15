import { Router } from "express";

import nationalId from "./nationalId/index.js";

const router = Router();

nationalId(router);

export default router;
