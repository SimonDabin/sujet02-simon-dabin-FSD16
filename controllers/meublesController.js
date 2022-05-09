import meubleModel from '../models/meublesModel.js';
import express from 'express';
const router = express.Router()

router.get('/', async (req, res) => {
 await meubleModel.find((err, docs) => {
    console.log(docs);
  })
})

export default router 

