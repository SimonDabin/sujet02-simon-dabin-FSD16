import FurnitureModel from '../models/meublesModel.js'

export default (req, res) => {
    if(ObjectID.isValidObjectId())
    return res.status(400).send('ID unknow: ' + req.params.id)
  
    const updateFurniture = {
      name: req.body.name,
      category: req.body.category,
      quantity: req.body.quantity  
    }
  
    FurnitureModel.findByIdAndUpdate(
      req.params.id,
      { $set: updateFurniture },
      { new: true },
      (err, docs) => {
        if(!err) res.send(docs);
        else console.log('update error: ' + err);
      }
    )
  }