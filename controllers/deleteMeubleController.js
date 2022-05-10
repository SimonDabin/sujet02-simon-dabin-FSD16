import MeubleModel from '../models/meublesModel.js'

export default (req, res) => {
    if(ObjectID.isValidObjectId())
    return res.status(400).send('ID unknow: ' + req.params.id)
  
    MeubleModel.findByIdAndRemove(
      req.params.id,
      (err, docs) => {
        if (!err) res.send(docs)
        else console.log('error delete: ' + err);
      })
  }
  