import express from "express";
const router = express.Router();

import HomeController from '../controllers/homeController.js'
import allFurnitureController from "../controllers/allFurnitureController.js";
import formMeubleController from "../controllers/formMeubleController.js";
import newMeublesController from "../controllers/newMeubleController.js";
import updateMeublesController from "../controllers/updateMeubleController.js";
import deleteMeublesController from "../controllers/deleteMeubleController.js";


router.get("/", HomeController);

router.get("/meubles", allFurnitureController);

router.get('/formMeuble', formMeubleController);

router.post('/new-meuble', newMeublesController);

router.put('/update-meuble/:id', updateMeublesController);

router.delete('/remove-meuble/:id', deleteMeublesController);


export default router;