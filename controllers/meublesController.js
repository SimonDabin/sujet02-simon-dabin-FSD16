import MeubleModel from '../models/meublesModel.js';
import express from 'express';
import ObjectID from 'mongoose';
const router = express.Router()

//tout les meubles
export const getAll = (req, res) => {
 MeubleModel.find((err, docs) => {
   if (!err) res.send(docs);
   else console.log('Erro to get data: ' + err);
  })
}

//ajout d'un meuble
router.post('/new-meuble', (req, res) => {
  const newRecord = new MeubleModel({
    name: req.body.name,
    category: req.body.category,
    quantity: req.body.quantity
  })

newRecord.save( (err, docs) => {
  if (!err) res.send(docs)
  else console.log('error creating new data: ' + err);
})
})

//modifier
router.put('/update-meuble/:id', (req, res) => {
  if(ObjectID.isValidObjectId())
  return res.status(400).send('ID unknow: ' + req.params.id)

  const updateRecord = {
    name: req.body.name,
    category: req.body.category,
    quantity: req.body.quantity  
  }

  MeubleModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      if(!err) res.send(docs);
      else console.log('update error: ' + err);
    }
  )
})

//supprimer un meuble
router.delete('/remove-meuble/:id', (req, res) => {
  if(ObjectID.isValidObjectId())
  return res.status(400).send('ID unknow: ' + req.params.id)

  MeubleModel.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if (!err) res.send(docs)
      else console.log('error delete: ' + err);
    })
})


export default router 

