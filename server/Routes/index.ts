import { Router } from "express";

const router = Router();

//For channel related requests
router.use("/channels", () => {});

//For user related requests
router.use("/user", () => {});

//For client related requests
router.use("/", () => {});
