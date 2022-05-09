import express from "express";
import MeublesController from "../controllers/meublesController";
const router = express.Router();

router.get("/meubles", MeublesController);


export default router;