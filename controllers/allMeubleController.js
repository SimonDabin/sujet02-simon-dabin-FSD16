import MeubleModel from '../models/meublesModel.js'

export default (req, res) => {
    MeubleModel.find((err, docs) => {
      if (!err) res.send(docs);
      else console.log('Erro to get data: ' + err);
     })
   }